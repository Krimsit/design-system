export type FigmaIcon = {
  id: string
  name: string
  imageUrl: string
}

export type FigmaImage = {
  err: string | null
  images: {
    [key: string]: string
  }
}

export type FigmaNode = {
  id: string
  name: string
  children: FigmaNode[]
}

export type FigmaData = {
  document: FigmaNode
}

export type ClientConfig = {
  figmaPersonalToken: string
  fileId: string
  page: string
  frame: string
  iconsPath: string
}

export type ClientOptions = {
  page: string
  frame: string
  iconsPath: string
}
