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
  getFuryWarriorArmor(db){
    return db
      .from('wow_gear')
      .select('*')
      .where('item_type', 'ILIKE', 'Plate')
      .where('primary_stat', 'ILIKE', 'Haste')
      .where('secondary_stat', 'ILIKE', 'Mastery')
      .where('secondary_stat', 'ILIKE', 'Critical Strike')   
  }
}

module.exports = ItemsService
