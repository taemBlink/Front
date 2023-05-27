import React from "react";

function Body({ children }) {
  return <div>{children}</div>;
}

function PostList() {
  const posts = [
    { id: 1, title: "첫 번째 글", content: "첫 번째 글 내용" },
    { id: 2, title: "두 번째 글", content: "두 번째 글 내용" },
    { id: 3, title: "세 번째 글", content: "세 번째 글 내용" },
  ];

  return (
    <Body>
      <h1>글 목록</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </Body>
  );
}

export default PostList;
