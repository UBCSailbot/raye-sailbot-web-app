# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: SetValuesRequest.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
from google.protobuf import descriptor_pb2
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from . import Value_pb2 as Value__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='SetValuesRequest.proto',
  package='NetworkTable',
  syntax='proto3',
  serialized_pb=_b('\n\x16SetValuesRequest.proto\x12\x0cNetworkTable\x1a\x0bValue.proto\"\x92\x01\n\x10SetValuesRequest\x12:\n\x06values\x18\x01 \x03(\x0b\x32*.NetworkTable.SetValuesRequest.ValuesEntry\x1a\x42\n\x0bValuesEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\"\n\x05value\x18\x02 \x01(\x0b\x32\x13.NetworkTable.Value:\x02\x38\x01\x62\x06proto3')
  ,
  dependencies=[Value__pb2.DESCRIPTOR,])
_sym_db.RegisterFileDescriptor(DESCRIPTOR)




_SETVALUESREQUEST_VALUESENTRY = _descriptor.Descriptor(
  name='ValuesEntry',
  full_name='NetworkTable.SetValuesRequest.ValuesEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='NetworkTable.SetValuesRequest.ValuesEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='value', full_name='NetworkTable.SetValuesRequest.ValuesEntry.value', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=_descriptor._ParseOptions(descriptor_pb2.MessageOptions(), _b('8\001')),
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=134,
  serialized_end=200,
)

_SETVALUESREQUEST = _descriptor.Descriptor(
  name='SetValuesRequest',
  full_name='NetworkTable.SetValuesRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='values', full_name='NetworkTable.SetValuesRequest.values', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
  ],
  extensions=[
  ],
  nested_types=[_SETVALUESREQUEST_VALUESENTRY, ],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=54,
  serialized_end=200,
)

_SETVALUESREQUEST_VALUESENTRY.fields_by_name['value'].message_type = Value__pb2._VALUE
_SETVALUESREQUEST_VALUESENTRY.containing_type = _SETVALUESREQUEST
_SETVALUESREQUEST.fields_by_name['values'].message_type = _SETVALUESREQUEST_VALUESENTRY
DESCRIPTOR.message_types_by_name['SetValuesRequest'] = _SETVALUESREQUEST

SetValuesRequest = _reflection.GeneratedProtocolMessageType('SetValuesRequest', (_message.Message,), dict(

  ValuesEntry = _reflection.GeneratedProtocolMessageType('ValuesEntry', (_message.Message,), dict(
    DESCRIPTOR = _SETVALUESREQUEST_VALUESENTRY,
    __module__ = 'SetValuesRequest_pb2'
    # @@protoc_insertion_point(class_scope:NetworkTable.SetValuesRequest.ValuesEntry)
    ))
  ,
  DESCRIPTOR = _SETVALUESREQUEST,
  __module__ = 'SetValuesRequest_pb2'
  # @@protoc_insertion_point(class_scope:NetworkTable.SetValuesRequest)
  ))
_sym_db.RegisterMessage(SetValuesRequest)
_sym_db.RegisterMessage(SetValuesRequest.ValuesEntry)


_SETVALUESREQUEST_VALUESENTRY.has_options = True
_SETVALUESREQUEST_VALUESENTRY._options = _descriptor._ParseOptions(descriptor_pb2.MessageOptions(), _b('8\001'))
# @@protoc_insertion_point(module_scope)
