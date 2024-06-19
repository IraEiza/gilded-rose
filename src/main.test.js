import { describe, expect, it } from "vitest";
import { Item, Shop } from "./gilded_rose";

describe("Gilded Rose", function() {
  const names = ["Apple", "Aged Brie", "Backstage passes to a TAFKAL80ETC concert", 'Sulfuras, Hand of Ragnaros']
  const qualities = [-1, 0, 1, 49, 50, 51]
  const sellIns = [10, 11, 12, 5, 6, 7, -1, 0, 1, 2, 3, 4]

  
  for(const name of names) {
    for(const quality of qualities) {
      for(const sellIn of sellIns) {
        it(`Works with ${name} - ${quality} - ${sellIn}`, function() {
          const gildedRose = new Shop([new Item(name, sellIn, quality)]);
          const items = gildedRose.updateQuality();
          expect(items[0]).toMatchSnapshot();
        });
      }
    }
  }
});

