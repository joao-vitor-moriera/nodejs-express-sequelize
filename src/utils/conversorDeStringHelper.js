module.exports = (objParams) =>{
  for (const propriedade in objetoParams) {
    if (/Id|id/.test(propriedade)) {
      objetoParams[propriedade] = Number(objetoParams[propriedade]);
    }
  }
  return objetoParams;
};