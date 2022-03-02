const isElementinObject = (object, element) => (
    Object.keys(object).find(item => item === element) === element ?  true : false
  )

  export default isElementinObject;