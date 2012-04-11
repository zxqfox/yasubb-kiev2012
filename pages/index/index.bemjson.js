({
    block: 'b-page',
    title: 'Фото дня на Яндекс.Фотках',
    head: [
        { elem: 'css', url: '_index.css'},
        { block: 'i-jquery', elem: 'core' },
        { block: 'b-social', elem: 'js' },
        { elem: 'js', url: '_index.js' }
    ],
    content: [{
        block: 'b-gallery',
        content: {
            block: 'b-fotorama',
            elem: 'preloader',
            content: 'Загрузка данных...'
        }
    },{
        block: 'b-social'
    },{
        block: 'i-metrica',
        content: '<script type="text/javascript">(function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter13851124 = new Ya.Metrika({id:13851124, enableAll: true, ut:"noindex", webvisor:true}); } catch(e) {} }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f); } else { f(); } })(document, window, "yandex_metrika_callbacks");</script><noscript><div><img src="//mc.yandex.ru/watch/13851124?ut=noindex" style="position:absolute; left:-9999px;" alt="" /></div></noscript>'
    }]
})
