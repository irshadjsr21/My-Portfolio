export default function formatData({ data, file, object }) {
  if (
    !(
      data &&
      data.allDataJson &&
      data.allDataJson.edges &&
      data.allDataJson.edges.length > 0
    )
  )
    return null
  for (let elem of data.allDataJson.edges) {
    if (elem.node && elem.node[file] && elem.node[file][object]) {
      return elem.node[file][object]
    }
  }
  return null
}
