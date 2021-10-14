export function jsonParser(req: any, body: string, done: any): void {
  if (req.url.startsWith('/stripe')) {
    done(null, body)
  } else {
    const newBody = body ? JSON.parse(body) : body
    done(null, newBody)
  }
}
