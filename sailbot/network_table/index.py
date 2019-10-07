import zmq
import google.protobuf
from sailbot.network_table.generated.Reply_pb2 import Reply
from sailbot.network_table.generated.SubscribeReply_pb2 import SubscribeReply
from sailbot.network_table.generated.Request_pb2 import Request
from sailbot.network_table.generated.SubscribeRequest_pb2 import SubscribeRequest
from google.protobuf.json_format import MessageToJson
from sailbot.repository import sensorRepository

context = zmq.Context()
socket = context.socket(zmq.PAIR)

def subscribe():
    init_sock = context.socket(zmq.REQ)
    init_sock.connect('ipc:///tmp/sailbot/NetworkTable')

    init_sock.send_string('connect')

    # remove null terminator at end of string
    filepath = init_sock.recv_string()[:-1]
    socket.connect('ipc://' + filepath)


    request = Request()
    request.type = Request.Type.SUBSCRIBE
    request.subscribe_request.uri = '/'
    serialized_request = request.SerializeToString()
    socket.send(serialized_request)


    while True:
        reply = Reply()
        serialized_reply = socket.recv()
        reply.ParseFromString(serialized_reply)

        # Ignore ACK replies
        if reply.type == Reply.Type.SUBSCRIBE:
            json_data = MessageToJson(reply.subscribe_reply.node)
            # save to database
