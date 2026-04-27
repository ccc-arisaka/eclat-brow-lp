'use client';

import * as React from 'react';
import '@/lib/env';

const ctaText = '今すぐ初回9,700円で予約する';

const reasons = [
  {
    title: 'まつげ×眉毛を同時に整えるから最短で垢抜ける',
    body: '単品メニューでは出せない“顔全体のバランス”を一気に調整。第一印象まで変わる仕上がりに。',
  },
  {
    title: '完全個室×丁寧カウンセリングで初心者も安心',
    body: '骨格・目元・理想イメージをすり合わせてから施術。ナチュラルなのにしっかり盛れる。',
  },
  {
    title: '朝のメイク時間を短縮、すっぴんでも自信',
    body: 'ビューラー・眉メイクの手間が減るから、忙しい朝でも整った目元をキープ。自己処理もラクに。',
  },
];

const voices = [
  {
    name: '28歳 / 会社員',
    text: 'まつげと眉毛を同時にやるだけで、顔が一気に垢抜けました。朝の準備が本当にラクです。',
  },
  {
    name: '24歳 / 販売職',
    text: 'すっぴんでも目元がぼやけないのが嬉しい！完全個室で相談しやすく、仕上がりも自然で大満足。',
  },
  {
    name: '33歳 / ママ',
    text: '自己処理で左右差が気になっていましたが、黄金比で整えてもらって印象が変わりました。',
  },
];

const faqs = [
  {
    q: 'どのメニューが一番人気ですか？',
    a: '一番人気は「まつげパーマ×黄金比眉毛の垢抜けセット」です。目元の印象をまとめて整えたい方に選ばれています。',
  },
  {
    q: '施術時間はどれくらいですか？',
    a: 'カウンセリング込みで約90分〜120分です。初回は理想の仕上がり確認を丁寧に行います。',
  },
  {
    q: 'メイクして行っても大丈夫ですか？',
    a: '問題ありません。目元は施術前にオフするため、普段通りでご来店いただけます。',
  },
];

const menuRows = [
  ['まつげパーマ', '¥6,900'],
  ['パリジェンヌラッシュリフト', '¥7,400'],
  ['眉毛スタイリング', '¥6,500'],
  ['まつげパーマ×眉毛セット', '通常 ¥14,800 → 初回 ¥9,700'],
];

export default function HomePage() {
  return (
    <main className='bg-[#12040d] pb-8 text-[#1a1a1a]'>
      <div className='mx-auto w-full max-w-[430px] overflow-hidden bg-[#fff7fb] shadow-[0_0_35px_rgba(0,0,0,0.45)]'>
        <section className='relative overflow-hidden bg-[radial-gradient(circle_at_top,#ff5fb6_0%,#35001f_65%,#12040d_100%)] px-4 pb-6 pt-4 text-white'>
          <p className='inline-block rounded-full border border-[#ffe7a3] bg-black/55 px-3 py-1 text-[12px] font-bold tracking-wide text-[#ffe7a3]'>
            ＼ 予約殺到中 ／ 目元垢抜け専門サロン
          </p>
          <p className='mt-3 inline-block bg-[#ffd100] px-2 py-1 text-[13px] font-black text-black'>
            東京エリア・完全個室
          </p>
          <h1 className='mt-3 text-[34px] font-black leading-[1.15] drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]'>
            すっぴんでも
            <br />
            視線を奪う目元へ
          </h1>
          <p className='mt-3 rounded-xl border-2 border-[#ffb6df] bg-white/90 p-3 text-[16px] font-bold leading-tight text-[#5b0032]'>
            まつげパーマ×黄金比眉毛の垢抜けセット
            <br />
            <span className='text-[15px]'>通常14,800円 →</span>{' '}
            <span className='text-[30px] text-[#e60073]'>初回9,700円</span>
          </p>
          <a
            href='#cta'
            className='mt-4 block rounded-xl border-b-4 border-[#a80052] bg-[#ff1389] px-4 py-4 text-center text-[19px] font-black leading-tight text-white shadow-[0_8px_0_#6d0035]'
          >
            {ctaText}
          </a>
          <p className='mt-3 text-center text-[12px] font-bold text-[#ffe7a3]'>
            ※ 先着枠 / 埋まり次第終了
          </p>
        </section>

        <section className='bg-white px-4 py-4'>
          <p className='rounded-md bg-black px-3 py-2 text-center text-[14px] font-black text-[#ffe083]'>
            こんなお悩み、ありませんか？
          </p>
          <ul className='mt-3 space-y-2 text-[16px] font-bold leading-snug'>
            <li className='rounded-lg border border-[#ffb6df] bg-[#fff2fa] p-2'>
              ☑ ビューラーしても夕方にはまつげが下がる
            </li>
            <li className='rounded-lg border border-[#ffb6df] bg-[#fff2fa] p-2'>
              ☑ 眉毛が決まらず毎朝メイクが長い
            </li>
            <li className='rounded-lg border border-[#ffb6df] bg-[#fff2fa] p-2'>
              ☑ 目元がぼんやりして疲れて見える
            </li>
            <li className='rounded-lg border border-[#ffb6df] bg-[#fff2fa] p-2'>
              ☑ 自己処理で左右差が気になる
            </li>
          </ul>
          <p className='mt-3 rounded-lg bg-[#ff2f95] p-3 text-center text-[18px] font-black leading-tight text-white'>
            その悩み、目元を同時に整えるだけで
            <br />
            一気に解決へ。
          </p>
        </section>

        <section className='bg-[linear-gradient(180deg,#1f0012_0%,#46002b_100%)] px-4 py-5 text-white'>
          <p className='inline-block bg-[#ffd100] px-2 py-1 text-[12px] font-black text-black'>
            人気No.1セット
          </p>
          <h2 className='mt-2 text-[26px] font-black leading-tight'>
            まつげ×眉毛を同時に整えて
            <span className='text-[#ff93cf]'> ナチュラルに盛る</span>
          </h2>
          <p className='mt-2 text-[15px] font-bold leading-snug text-[#ffd8ef]'>
            エクラブロウは、まつげのカール感と眉毛の黄金比デザインを同時に設計。
            “メイクが上手い人感”を毎日再現できます。
          </p>
          <div className='mt-3 grid grid-cols-2 gap-2 text-[13px] font-bold'>
            <p className='rounded-md border border-[#ff8fc8] bg-[#ff3ca1]/30 p-2'>
              ✓ すっぴんでも盛れる
            </p>
            <p className='rounded-md border border-[#ff8fc8] bg-[#ff3ca1]/30 p-2'>
              ✓ 朝メイクが時短
            </p>
            <p className='rounded-md border border-[#ff8fc8] bg-[#ff3ca1]/30 p-2'>
              ✓ 第一印象アップ
            </p>
            <p className='rounded-md border border-[#ff8fc8] bg-[#ff3ca1]/30 p-2'>
              ✓ 自己処理がラク
            </p>
          </div>
          <a
            href='#cta'
            className='mt-4 block rounded-xl border-b-4 border-[#b89000] bg-[#ffd100] px-4 py-3 text-center text-[18px] font-black text-black shadow-[0_7px_0_#8b6500]'
          >
            {ctaText}
          </a>
        </section>

        <section className='bg-white px-4 py-4'>
          <p className='rounded-md bg-[#2c001a] px-3 py-2 text-center text-[14px] font-black text-[#ffdba3]'>
            ビフォーアフター実感の声、多数
          </p>
          <div className='mt-3 space-y-2'>
            <div className='rounded-xl border-2 border-dashed border-[#ff69b4] bg-[#fff0f8] p-3'>
              <p className='text-[12px] font-black text-[#96004c]'>BEFORE</p>
              <p className='mt-1 text-[15px] font-bold'>
                目元が重く見える / 眉の形が定まらない
              </p>
            </div>
            <div className='text-center text-[24px] font-black text-[#ff1187]'>
              ↓
            </div>
            <div className='rounded-xl border-2 border-[#ff1187] bg-[#fff] p-3 shadow-[0_0_0_3px_#ffe0f1_inset]'>
              <p className='text-[12px] font-black text-[#96004c]'>AFTER</p>
              <p className='mt-1 text-[15px] font-bold'>
                目力アップ / 顔全体のバランスが整い垢抜け印象に
              </p>
            </div>
          </div>
        </section>

        <section className='bg-[#19000f] px-4 py-5 text-white'>
          <p className='text-center text-[13px] font-black text-[#ffd88b]'>
            選ばれる理由
          </p>
          <div className='mt-2 space-y-2'>
            {reasons.map((reason, index) => (
              <article
                key={reason.title}
                className='rounded-xl border border-[#ff8bc8] bg-[#3b0023] p-3'
              >
                <p className='text-[12px] font-black text-[#ffd88b]'>
                  No.{index + 1}
                </p>
                <h3 className='mt-1 text-[17px] font-black leading-tight'>
                  {reason.title}
                </h3>
                <p className='mt-1 text-[14px] font-bold leading-snug text-[#ffd8ef]'>
                  {reason.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className='bg-white px-4 py-4'>
          <p className='rounded-md bg-[#ffd100] px-3 py-2 text-center text-[14px] font-black text-black'>
            メニュー・価格
          </p>
          <div className='mt-2 overflow-hidden rounded-xl border-2 border-[#1e0011]'>
            {menuRows.map((row) => (
              <div
                key={row[0]}
                className='flex items-center justify-between border-b border-[#ffc4e3] bg-white px-3 py-3 last:border-b-0'
              >
                <p className='w-1/2 text-[14px] font-black leading-snug'>
                  {row[0]}
                </p>
                <p className='w-1/2 text-right text-[16px] font-black text-[#d10069]'>
                  {row[1]}
                </p>
              </div>
            ))}
          </div>
          <p className='mt-3 rounded-lg bg-[#2a0018] p-3 text-center text-[15px] font-black leading-tight text-[#ffe190]'>
            今だけ初回限定価格。予約集中のため
            <br />
            週末枠はお早めに。
          </p>
        </section>

        <section className='bg-[#fff2fa] px-4 py-4'>
          <p className='rounded-md bg-black px-3 py-2 text-center text-[14px] font-black text-white'>
            口コミで広がるエクラブロウ
          </p>
          <div className='mt-3 space-y-2'>
            {voices.map((voice) => (
              <blockquote
                key={voice.name}
                className='rounded-xl border border-[#ff9ed2] bg-white p-3'
              >
                <p className='text-[14px] font-bold leading-snug'>
                  「{voice.text}」
                </p>
                <cite className='mt-2 block text-right text-[12px] font-black not-italic text-[#7d003f]'>
                  {voice.name}
                </cite>
              </blockquote>
            ))}
          </div>
        </section>

        <section className='bg-white px-4 py-4'>
          <p className='rounded-md bg-[#3d0026] px-3 py-2 text-center text-[14px] font-black text-[#ffd88f]'>
            ご予約〜施術の流れ
          </p>
          <ol className='mt-3 space-y-2'>
            {[
              'WEBから希望日時を選んで予約',
              '来店後、目元と眉の理想をヒアリング',
              'まつげパーマ施術',
              '黄金比をもとに眉毛スタイリング',
              '仕上がりチェック＆ホームケア案内',
            ].map((step, index) => (
              <li
                key={step}
                className='flex gap-2 rounded-lg border border-[#ffb4dd] bg-[#fff6fb] p-2'
              >
                <span className='flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#ff0f87] text-[13px] font-black text-white'>
                  {index + 1}
                </span>
                <p className='pt-1 text-[15px] font-bold leading-snug'>
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className='bg-[#1c0011] px-4 py-4 text-white'>
          <p className='rounded-md bg-[#ffd100] px-3 py-2 text-center text-[14px] font-black text-black'>
            よくある質問
          </p>
          <div className='mt-3 space-y-2'>
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className='rounded-lg border border-[#ff8bc7] bg-[#33001f] p-3'
              >
                <summary className='cursor-pointer text-[15px] font-black'>
                  Q. {faq.q}
                </summary>
                <p className='mt-2 text-[14px] font-bold leading-snug text-[#ffd8ef]'>
                  A. {faq.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section
          id='cta'
          className='bg-[linear-gradient(180deg,#ff3da2_0%,#a40055_100%)] px-4 py-6 text-white'
        >
          <p className='text-center text-[13px] font-black text-[#ffe4a5]'>
            初回限定オファー
          </p>
          <p className='mt-2 text-center text-[20px] font-black leading-tight'>
            通常14,800円の垢抜けセットが
            <br />
            <span className='text-[36px] text-[#ffe16f]'>初回9,700円</span>
          </p>
          <a
            href='#'
            className='mt-4 block rounded-xl border-b-4 border-[#1d0010] bg-[#ffd100] px-4 py-4 text-center text-[20px] font-black leading-tight text-black shadow-[0_8px_0_#1d0010]'
          >
            {ctaText}
          </a>
          <p className='mt-3 text-center text-[12px] font-bold'>
            完全個室 / 当日メイク時短 / 目元印象アップ
          </p>
        </section>
      </div>
    </main>
  );
}
