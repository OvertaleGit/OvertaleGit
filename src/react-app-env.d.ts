/// <reference types="react-scripts" />

export interface Post {
  id: string
  attributes: { [className: string]: string },
  body: body,
  bodyBegin: line,
  frontmatter: yaml
}