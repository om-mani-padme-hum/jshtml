/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class Div
 * @extends ContainerElement
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML div elements.
 */
class Div extends containerElement.ContainerElement {
  /**
   * @signature new Div([data])
   * @added v0.1.0
   * @param data Object
   * @returns Div
   * @description Returns a new [Div] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {
    super(data);
  }
  
  /**
   * @signature render(indent) 
   * @added v0.1.0
   * @param indent number
   * @return string Rendered HTML
   * @description Render this element with `indent` spaces of indentation before each line.
   */
  render(indent) {
    this.tag('div');
    
    return super.render(indent);
  }
}

module.exports.Div = Div;
