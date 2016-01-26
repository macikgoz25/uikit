import $ from 'jquery';
import Alert from './alert';
import Grid from './grid';
import Responsive from './responsive';
import Svg from './svg';

export default function (UIkit, _) {

    // add touch identifier class
    $('html').addClass(_.hasTouch ? 'uk-touch' : 'uk-notouch');

    $(window).on('resize orientationchange', e => {
        for (var id in UIkit.instances) {
            UIkit.instances[id]._callUpdate(e);
        }
    });

    // core components
    UIkit.use(Alert);
    UIkit.use(Grid);
    UIkit.use(Responsive);
    UIkit.use(Svg);

}