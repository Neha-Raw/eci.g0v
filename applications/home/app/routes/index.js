import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  @service store;

  async model() {
    // Video fetch karo
    let video = await this.store.findRecord('video');

    // Return both video and modules to template
    return { video, modules };
  }
}
