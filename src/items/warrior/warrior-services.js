const warriorServices = {
  getFuryWarriorArmor(db){
    const gear = [];
    const helm = 
      db
        .from('wow_gear')
        .select('*')
        .where('item_name', 'ILIKE', 'Diadem of Imperious Desire')
    
    return helm; 
  }
}

module.exports = warriorServices

