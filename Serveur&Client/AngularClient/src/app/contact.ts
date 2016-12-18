export class Contact {
  constructor(
    public firstName: string,
    public lastName: string,
    public description?: string, //optional
    public _id?: string //optional
  ) { }
}
