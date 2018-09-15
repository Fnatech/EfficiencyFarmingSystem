import { observable, action } from 'mobx';
import app from '../app';

export default class CropStore {

  @observable currentPhLevel = 0;
  @observable recommendedCrops = [];
  @observable allCrops = [];
  @observable show = false;
  soilService = app.service('/soil');
  cropService = app.service('/crops');

  @action.bound
  toggleShow() {
    this.show = !this.show;
    console.log('toggled!');
  }

  @action.bound
  async getLatestPhLevel() {
    const results = await this.soilService.find();
    this.currentPhLevel = results[results.length - 1].value;
  }

  @action.bound
  polling() {
    setInterval(async () => {
      if (this.show) {
        await this.getLatestPhLevel();
        this.getRecommendedCrops(this.currentPhLevel);
      }
    }, 1000);
  }

  @action.bound
  async retrieveAllCrops() {
    this.allCrops = await this.cropService.find();
  }

  @action.bound
  getRecommendedCrops(phLevel) {
    this.recommendedCrops = this.allCrops.filter((crop) => {
      return crop.minRangePhLevel <= phLevel && crop.maxRangePhLevel >= phLevel;
    }); 
  }
}
