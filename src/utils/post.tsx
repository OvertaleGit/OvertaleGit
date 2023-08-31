import '@scss/Post.scss'
import { Post } from '@root/react-app-env';
import data from '@root/datas/data.json'

const postMap = new Map<string, string>();

export const InitPostMap = ():void => {

  for (let i = 0; i < data.posts.length; i++) {
    postMap.set(data.posts[i].id, data.posts[i].content)
  }
  console.log(postMap);
}

export const FindAllPosts= ():Post[] => {
  return Array.from({length: data.posts.length},(_, i) => (data.posts.length-1) - i)
  .map(index => Parse(data.posts[index].id, data.posts[index].content))
}

export const GetPost=(id:string):Post => {
  
  return Parse(id,postMap.get(id))
}

var platform = typeof process !== 'undefined' ? process.platform : '';
const pattern = '^(' +
  '(= yaml =|---)' +
  '$([\\s\\S]*?)' +
  '^(?:\\2|\\.\\.\\.)\\s*' +
  '$' +
  (platform === 'win32' ? '\\r?' : '') +
  '(?:\\n)?)';

// NOTE: If this pattern uses the 'g' flag the `regex` variable definition will
// need to be moved down into the functions that use it.
const regex = new RegExp(pattern, 'm')

const computeLocation = (match:any, body:any) => {
  var line = 1
  var pos = body.indexOf('\n')
  var offset = match.index + match[0].length

  while (pos !== -1) {
    if (pos >= offset) {
      return line
    }
    line++
    pos = body.indexOf('\n', pos + 1)
  }

  return line
}

export const Parse = (id:string, string:string|unknown):Post => {
  if (string === null) {
    return {
      id: "",
      attributes: {},
      body: string,
      bodyBegin: 1,
      frontmatter: {},
    }
  }
    
  var match = regex.exec(string as string)
  if (!match) {
    return {
      id: "",
      attributes: {},
      body: string,
      bodyBegin: 1,
      frontmatter: {},
    }
  }
  var parser = require('js-yaml')
  var loader = parser.safeLoad
  var yaml = match[match.length - 1].replace(/^\s+|\s+$/g, '')
  var attributes = loader(yaml) || {}
  var body = (string as string).replace(match[0], '')
  var line = computeLocation(match, string)

  return {
    id: id,
    attributes: attributes,
    body: body,
    bodyBegin: line,
    frontmatter: yaml
  }
}