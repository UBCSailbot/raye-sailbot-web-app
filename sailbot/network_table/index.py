import zmq
import google.protobuf
from .generated import Reply_pb2
from .generated import SubscribeReply_pb2
from .generated import Request_pb2
from .generated import SubscribeRequest_pb2
from sailbot.repository import sensorRepository

context = zmq.Context()
socket = context.socket(zmq.PAIR)

def subscribe():
    init_sock = context.socket(zmq.REQ)
    init_sock.connect('ipc:///tmp/sailbot/NetworkTable')

    init_socket.send("connect")

    filepath = init_socket.recv()
    socket.connect(filepath)

    subscribe_request = SubscribedRequest()
    subscribe_request.setUri('/')

    request = Reply_pb2.Request()
    request.type = Reply_pb2.Reply.TYPE.SUBSCRIBE
    serialized_request = request.SerializeToString()
    socket.send(serialized_request)

    while True:
        replyProto = Reply_pb2.Reply()
        encoded_reply = socket.recv()
        replyProto.decode(encoded_reply)
        if replyProto["type"] == Reply_pb2.Reply.Type.SUBSCRIBE:
            data = replyProto
            # save to database
