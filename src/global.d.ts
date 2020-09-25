export interface ModuleObject {
  name: string;
  title: string;
  url: string;
  children?: ModuleObject[];
}

export interface Portfolio {
  description: string;
  githubUrl: string;
  imageUrl: string;
  libraryFramework: string;
  name: string;
  role: string;
  url: string;
  year: number;
}

export interface About {
  about: string;
  email: string;
  github: string;
  linkedin: string;
  name: string;
}
