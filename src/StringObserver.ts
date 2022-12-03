export class StringObserver {
  private string: string

  constructor(string: string) {
    this.string = string
  }

  getWordCount(): number {
    return this.string.split(' ').length
  }

  getEvenWordCount(): number {
    return this.string.split(' ').filter(s => !!(s.length % 2) ).length
  }

  getUpperCaseWordCount(): number {
    return this.string.split(' ').filter(s => s[0] == s[0].toUpperCase() ).length
  }
}