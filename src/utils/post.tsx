import '@scss/Post.scss'
import { Post } from '@root/react-app-env';
import data from '@root/datas/data.json'

export const FindAllPosts= ():string[] => {
  return Array.from({length: data.length},(_, i) => (data.length-1) - i)
  .map(index => data[index])
}

export const FindPost=(id:string) => {
  return import(`@posts/${id}`)
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

export const Parse = (string:string):Post => {
  var match = regex.exec(string)
  if (!match) {
    return {
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
  var body = string.replace(match[0], '')
  var line = computeLocation(match, string)

  return {
    attributes: attributes,
    body: body,
    bodyBegin: line,
    frontmatter: yaml
  }
}