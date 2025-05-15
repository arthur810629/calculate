// src/components/AdBanner.jsx
import { useEffect } from 'react';

export default function AdBanner({ blockId = "R-A-15506473-1" }) {
  useEffect(() => {
    // когда скрипт загрузится, пушим задачу на рендер рекламы
    window.yaContextCb.push(() => {
      Ya.Context.AdvManager.render({
        blockId: blockId,
        renderTo: `yandex_rtb_${blockId}`
      });
    });
  }, [blockId]);

  // этот div будет заполнен Яндексом
  return <div id={`yandex_rtb_${blockId}`}></div>;
}
