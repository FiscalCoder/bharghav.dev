import { useTranslation } from 'next-i18next'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import { Twemoji } from '../Twemoji'
import { useLocale } from '~/hooks/useLocale'

function createTypedInstance(el: HTMLElement) {
  return new Typed(el, {
    stringsElement: '#bios',
    typeSpeed: 40,
    backSpeed: 10,
    loop: true,
    backDelay: 1000,
  })
}

export function TypedBios() {
  let el = useRef(null)
  let typed = useRef(null)
  let [locale] = useLocale()
  let tr = useTranslation('common')

  useEffect(() => {
    if (tr.ready) {
      typed.current?.destroy()
      typed.current = createTypedInstance(el.current)
    }
  }, [locale, tr])

  return (
    <div>
      <ul id="bios" className="hidden">
        <li>
          {tr.t('bio_1')} <Twemoji emoji="man-technologist" />
        </li>
        <li>
          {tr.t('bio_2')} <Twemoji emoji="cityscape" />
        </li>
        <li>
          {tr.t('bio_3')} <Twemoji emoji="briefcase" />
        </li>
        <li>
          {tr.t('bio_4')} <Twemoji emoji="computer" />
        </li>
        <li>
          {tr.t('bio_5')} <Twemoji emoji="wrench" />
        </li>
        <li>
          {tr.t('bio_6')} <Twemoji emoji="toolbox" />
        </li>
        <li>
          {tr.t('bio_7')} <Twemoji emoji="bust-in-silhouette" /> <Twemoji emoji="airplane" />
        </li>
        <li>
          {tr.t('bio_8')} <Twemoji emoji="musical-note" /> <Twemoji emoji="violin" />{' '}
          <Twemoji emoji="musical-keyboard" />
        </li>
        <li>
          {tr.t('bio_9')} <Twemoji emoji="video-game" />
        </li>
        <li>
          {tr.t('bio_10')} <Twemoji emoji="bicyclist" />
        </li>
        <li>
          {tr.t('bio_11')} <Twemoji emoji="calendar" /> <Twemoji emoji="rocket" />
        </li>
        <li>
          {tr.t('bio_12')} <Twemoji emoji="earth-asia" /> <Twemoji emoji="man-office-worker" />
        </li>
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  )
}
