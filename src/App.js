import kebabCase from 'lodash.kebabcase';

export default class App {
  constructor(opts) {

    opts = opts || {};

    if (!opts.name) {
      throw new Error('App name not given.');
    }
    this.name = opts.name;

    if (!opts.packageName) {
      throw new Error("App doesn't have a packagename in the packageName property");
    }
    this.packageName = opts.packageName;

    if (!opts.slug) {
      opts.slug = opts.name;
    }

    this.slug = kebabCase(opts.slug);
    this.category = opts.category;
    this.description = opts.description;
    this.icons = opts.icons;
    this.version = opts.version;

    if (opts.routes) {
      this.routes = opts.routes;
      this.routes.path = this.slug;
    }
  }

  getRootPath() {
    return `/app/${this.slug}`;
  }
}
