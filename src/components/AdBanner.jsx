// src/components/AdBanner.jsx
import { useEffect } from 'react';

export default function AdBanner({ blockId = "R-A-15506473-1" }) {
  useEffect(() => {
    // если загрузчик не подхватился — выходим
    if (!window.yaContextCb || typeof Ya === 'undefined') return;

    window.yaContextCb.push(() => {
      try {
        Ya.Context.AdvManager.render({
          blockId,
          renderTo: `yandex_rtb_${blockId}`
        });
      } catch (e) {
        console.warn('Yandex RTB render failed', e);
      }
    });
  }, [blockId]);

  return <div id={`yandex_rtb_${blockId}`}></div>;
}
