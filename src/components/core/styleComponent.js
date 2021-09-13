const METHOD_NOT_IMPLEMENTED='Method not implemented'
import css from './baseDateComponent.css.js'

export class StyleComponent {
    _setStyle(){
        throw METHOD_NOT_IMPLEMENTED;
    }
    static createStyle(){
        this._shadow.adoptedStyleSheets = [css];
        this._setStyle();
    }
}
export default new StyleComponent(); 