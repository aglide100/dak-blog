package models

type Node struct {
	File   File
	Childs []*Node
}

type Graph struct {
	Nodes []*Node
}