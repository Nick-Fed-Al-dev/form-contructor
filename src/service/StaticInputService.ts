export class StaticInputService{

  static validateEmail(value : string) : string{
    if (!value.includes("@")) {
      return "email should include @"
    }
  
    if (!value.split("@")[0].length) {
      return 'email should include username before @'
    }
  
    if (!value.split("@")[1].length) {
      return "email should include domen after @"
    }
  
    if (!value.split("@")[1].includes(".")) {
      return "email should include . after @"
    }
  
    if (!value.split("@")[1].split(".")[0].length) {
      return "email should include domen name"
    }
  
    if (!value.split("@")[1].split(".")[1].length) {
      return "email should include extension"
    }
    return ''
  }

  static validatePassword(value : string) : string{
    if(value.length < 6){
      return 'password length should be at least 6'
    }
    return ''
  }

  static validateFirstName(value : string) : string{
    if(!/^[a-zA-Z]+$/.test(value)){
      return 'first name should consist of latin characters without numbers or whitespaces'
    }
    return ''
  }

  static validateSecondName(value : string) : string{
    if(!/^[a-zA-Z]+$/.test(value)){
      return 'second name should consist of latin characters without numbers or whitespaces'
    }
    return ''
  }

  static validateLastName(value : string) : string{
    if(value === ''){
      return ''
    }
    if(!/^[a-zA-Z]+$/.test(value)){
      return 'last name should consist of latin characters without numbers or whitespaces'
    }
    return ''
  }

  static validateAge(value : number) : string{
    if(value <= 4 || value > 150){
      return 'value should be integer between 4 and 150'
    }
    return ''
  }

}