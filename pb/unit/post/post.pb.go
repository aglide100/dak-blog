// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.1
// 	protoc        v3.17.3
// source: pb/unit/post/post.proto

package post

import (
	comment "github.com/aglide100/dak-blog/pb/unit/comment"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type Post struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id          int64    `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Title       string   `protobuf:"bytes,2,opt,name=title,proto3" json:"title,omitempty"`
	Author      string   `protobuf:"bytes,3,opt,name=author,proto3" json:"author,omitempty"`
	WrittenDate string   `protobuf:"bytes,4,opt,name=written_date,json=writtenDate,proto3" json:"written_date,omitempty"`
	Content     string   `protobuf:"bytes,5,opt,name=content,proto3" json:"content,omitempty"`
	Thumbnail   string   `protobuf:"bytes,6,opt,name=thumbnail,proto3" json:"thumbnail,omitempty"`
	PictureURLs []string `protobuf:"bytes,7,rep,name=pictureURLs,proto3" json:"pictureURLs,omitempty"`
}

func (x *Post) Reset() {
	*x = Post{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pb_unit_post_post_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Post) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Post) ProtoMessage() {}

func (x *Post) ProtoReflect() protoreflect.Message {
	mi := &file_pb_unit_post_post_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Post.ProtoReflect.Descriptor instead.
func (*Post) Descriptor() ([]byte, []int) {
	return file_pb_unit_post_post_proto_rawDescGZIP(), []int{0}
}

func (x *Post) GetId() int64 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *Post) GetTitle() string {
	if x != nil {
		return x.Title
	}
	return ""
}

func (x *Post) GetAuthor() string {
	if x != nil {
		return x.Author
	}
	return ""
}

func (x *Post) GetWrittenDate() string {
	if x != nil {
		return x.WrittenDate
	}
	return ""
}

func (x *Post) GetContent() string {
	if x != nil {
		return x.Content
	}
	return ""
}

func (x *Post) GetThumbnail() string {
	if x != nil {
		return x.Thumbnail
	}
	return ""
}

func (x *Post) GetPictureURLs() []string {
	if x != nil {
		return x.PictureURLs
	}
	return nil
}

type Comments struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Comment []*comment.Comment `protobuf:"bytes,1,rep,name=Comment,proto3" json:"Comment,omitempty"`
}

func (x *Comments) Reset() {
	*x = Comments{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pb_unit_post_post_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Comments) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Comments) ProtoMessage() {}

func (x *Comments) ProtoReflect() protoreflect.Message {
	mi := &file_pb_unit_post_post_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Comments.ProtoReflect.Descriptor instead.
func (*Comments) Descriptor() ([]byte, []int) {
	return file_pb_unit_post_post_proto_rawDescGZIP(), []int{1}
}

func (x *Comments) GetComment() []*comment.Comment {
	if x != nil {
		return x.Comment
	}
	return nil
}

var File_pb_unit_post_post_proto protoreflect.FileDescriptor

var file_pb_unit_post_post_proto_rawDesc = []byte{
	0x0a, 0x17, 0x70, 0x62, 0x2f, 0x75, 0x6e, 0x69, 0x74, 0x2f, 0x70, 0x6f, 0x73, 0x74, 0x2f, 0x70,
	0x6f, 0x73, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0c, 0x70, 0x62, 0x2e, 0x75, 0x6e,
	0x69, 0x74, 0x2e, 0x70, 0x6f, 0x73, 0x74, 0x1a, 0x1d, 0x70, 0x62, 0x2f, 0x75, 0x6e, 0x69, 0x74,
	0x2f, 0x63, 0x6f, 0x6d, 0x6d, 0x65, 0x6e, 0x74, 0x2f, 0x63, 0x6f, 0x6d, 0x6d, 0x65, 0x6e, 0x74,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xc1, 0x01, 0x0a, 0x04, 0x50, 0x6f, 0x73, 0x74, 0x12,
	0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x52, 0x02, 0x69, 0x64, 0x12,
	0x14, 0x0a, 0x05, 0x74, 0x69, 0x74, 0x6c, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05,
	0x74, 0x69, 0x74, 0x6c, 0x65, 0x12, 0x16, 0x0a, 0x06, 0x61, 0x75, 0x74, 0x68, 0x6f, 0x72, 0x18,
	0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x61, 0x75, 0x74, 0x68, 0x6f, 0x72, 0x12, 0x21, 0x0a,
	0x0c, 0x77, 0x72, 0x69, 0x74, 0x74, 0x65, 0x6e, 0x5f, 0x64, 0x61, 0x74, 0x65, 0x18, 0x04, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x0b, 0x77, 0x72, 0x69, 0x74, 0x74, 0x65, 0x6e, 0x44, 0x61, 0x74, 0x65,
	0x12, 0x18, 0x0a, 0x07, 0x63, 0x6f, 0x6e, 0x74, 0x65, 0x6e, 0x74, 0x18, 0x05, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x07, 0x63, 0x6f, 0x6e, 0x74, 0x65, 0x6e, 0x74, 0x12, 0x1c, 0x0a, 0x09, 0x74, 0x68,
	0x75, 0x6d, 0x62, 0x6e, 0x61, 0x69, 0x6c, 0x18, 0x06, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x74,
	0x68, 0x75, 0x6d, 0x62, 0x6e, 0x61, 0x69, 0x6c, 0x12, 0x20, 0x0a, 0x0b, 0x70, 0x69, 0x63, 0x74,
	0x75, 0x72, 0x65, 0x55, 0x52, 0x4c, 0x73, 0x18, 0x07, 0x20, 0x03, 0x28, 0x09, 0x52, 0x0b, 0x70,
	0x69, 0x63, 0x74, 0x75, 0x72, 0x65, 0x55, 0x52, 0x4c, 0x73, 0x22, 0x3e, 0x0a, 0x08, 0x43, 0x6f,
	0x6d, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x12, 0x32, 0x0a, 0x07, 0x43, 0x6f, 0x6d, 0x6d, 0x65, 0x6e,
	0x74, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x18, 0x2e, 0x70, 0x62, 0x2e, 0x75, 0x6e, 0x69,
	0x74, 0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x65, 0x6e, 0x74, 0x2e, 0x43, 0x6f, 0x6d, 0x6d, 0x65, 0x6e,
	0x74, 0x52, 0x07, 0x43, 0x6f, 0x6d, 0x6d, 0x65, 0x6e, 0x74, 0x42, 0x2c, 0x5a, 0x2a, 0x67, 0x69,
	0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x61, 0x67, 0x6c, 0x69, 0x64, 0x65, 0x31,
	0x30, 0x30, 0x2f, 0x64, 0x61, 0x6b, 0x2d, 0x62, 0x6c, 0x6f, 0x67, 0x2f, 0x70, 0x62, 0x2f, 0x75,
	0x6e, 0x69, 0x74, 0x2f, 0x70, 0x6f, 0x73, 0x74, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_pb_unit_post_post_proto_rawDescOnce sync.Once
	file_pb_unit_post_post_proto_rawDescData = file_pb_unit_post_post_proto_rawDesc
)

func file_pb_unit_post_post_proto_rawDescGZIP() []byte {
	file_pb_unit_post_post_proto_rawDescOnce.Do(func() {
		file_pb_unit_post_post_proto_rawDescData = protoimpl.X.CompressGZIP(file_pb_unit_post_post_proto_rawDescData)
	})
	return file_pb_unit_post_post_proto_rawDescData
}

var file_pb_unit_post_post_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_pb_unit_post_post_proto_goTypes = []interface{}{
	(*Post)(nil),            // 0: pb.unit.post.Post
	(*Comments)(nil),        // 1: pb.unit.post.Comments
	(*comment.Comment)(nil), // 2: pb.unit.comment.Comment
}
var file_pb_unit_post_post_proto_depIdxs = []int32{
	2, // 0: pb.unit.post.Comments.Comment:type_name -> pb.unit.comment.Comment
	1, // [1:1] is the sub-list for method output_type
	1, // [1:1] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_pb_unit_post_post_proto_init() }
func file_pb_unit_post_post_proto_init() {
	if File_pb_unit_post_post_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_pb_unit_post_post_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Post); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_pb_unit_post_post_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Comments); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_pb_unit_post_post_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_pb_unit_post_post_proto_goTypes,
		DependencyIndexes: file_pb_unit_post_post_proto_depIdxs,
		MessageInfos:      file_pb_unit_post_post_proto_msgTypes,
	}.Build()
	File_pb_unit_post_post_proto = out.File
	file_pb_unit_post_post_proto_rawDesc = nil
	file_pb_unit_post_post_proto_goTypes = nil
	file_pb_unit_post_post_proto_depIdxs = nil
}
