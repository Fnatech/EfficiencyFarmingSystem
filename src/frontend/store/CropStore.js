import { observable, action } from 'mobx';
import app from '../app';

class CropStore {

  @observable currentPhLevel = 0;
  @observable recommendedCrops = [];
  @observable allCrops = [];
  @observable show = false;
  soilService = app.service('/soil');
  cropService = app.service('/crops');

  @action.bound
  toggleShow() {
    this.show = !this.show;
  }

  async getLatestPhLevel() {
    const results = await this.soilService.find();
    this.currentPhLevel = results[results.length - 1];
  }

  async retrieveAllCrops() {
    this.allCrops = await this.cropService.find();
  }

  getRecommendedCrops(phLevel) {
    this.recommendedCrops = this.allCrops.filter((crop) => {
      return crop.minRangePhLevel <= phLevel && crop.maxRangePhLevel >= phLevel;
    }); 
  }
}

const store = new CropStore();
window.cropStore = store;