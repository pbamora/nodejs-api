import { v4 as uuidV4 } from 'uuid'

export class Category {
  id?: string
  name: string
  description: string
  created_at?: string

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
      this.created_at = new Date().toISOString()
    }
  }
}