
const writeClipboard = async (value) => {
  const result = await navigator.permissions.query({ name: "clipboard-write" })
  if (result.state === "granted" || result.state === "prompt") {
    await navigator.clipboard.writeText(value)
  }
}

export { writeClipboard }

