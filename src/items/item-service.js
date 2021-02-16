const xss = require('xss')

const ItemsService = {
  getAllItems(db) {
    return db
      .from('wow_gear as item')
      .select(
        'item.item_name',
        'item.item_category',
        'item.item_type',
        'item.item_class',
        'item.item_location',
        'item.item_source',
        'item.main_stat',
        'item.primary_stat',
        'item.secondary_stat',
        'item.item_id',
      )
  },
  
  getById(db, id) {
    return ItemsService.getAllItems(db)
      .where('item.item_id', id)
      .first()
  },
  getByItemSlot(db, Slot){
    return ItemsService.getAllItems(db)
      .where('item.item_class', Slot)
  },
  getByItemMainStat(db, mainStat){
    return ItemsService.getAllItems(db)
      .where('item.main_stat', mainStat)
  },
  serializeItems(item) {
      return {
      Name: item.item_name,
      id: item.item_id,      
    }
  },
  getFuryWarrior(db){
    return db
      .from('fury_warrior')
      .select('*')
  },
  getArmsWarrior(db){
    return db
      .from('arms_warrior')
      .select('*')
  },
  getProtectionWarrior(db){
    return db
      .from('protection_warrior')
      .select('*')
  },
  getMarksmanHunter(db){
    return db
      .from('marksman_hunter')
      .select('*')
  },
  getBeastMasteryHunter(db){
    return db
      .from('beast_mastery_hunter')
      .select('*')
  },
  getSurvivalHunter(db){
    return db
      .from('survival_hunter')
      .select('*')
  }
}

module.exports = ItemsService
