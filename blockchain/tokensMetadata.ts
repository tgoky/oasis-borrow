import { staticFilesRuntimeUrl } from 'helpers/staticPaths'
import { keyBy } from 'lodash'
import type { ElementOf } from 'ts-essentials'

export interface TokenConfig {
  symbol: string
  precision: number
  digits: number
  maxSell: string
  name: string
  icon: string
  iconCircle: string
  iconColor: string
  coinpaprikaTicker: string
  tags: CoinTag[]
  color: string
  bannerIcon: string
  bannerGif?: string
  token0?: string
  token1?: string
  coinbaseTicker?: string
  background?: string
  digitsInstant?: number
}

export const COIN_TAGS = ['stablecoin', 'lp-token'] as const
export type CoinTag = ElementOf<typeof COIN_TAGS>

export const tokens = [
  {
    symbol: 'USDP',
    precision: 18,
    digits: 5,
    name: 'Pax Dollar',
    icon: 'usdp_circle_color',
    iconCircle: 'usdp_circle_color',
    iconColor: 'ether_color',
    coinpaprikaTicker: 'usdp-paxos-standard-token',
    color: '#0B9F74',
    background: 'linear-gradient(143.13deg, #0B9F74 12.24%, #64DFBB 85.9%) #FFFFFF',
    bannerIcon: staticFilesRuntimeUrl('/static/img/tokens/eth.png'),
    bannerGif: staticFilesRuntimeUrl('/static/img/tokens/eth.gif'),
    tags: [],
  },
  {
    symbol: 'STETH',
    precision: 18,
    digits: 5,
    name: 'Lido Staked ETH',
    icon: 'steth_circle_color',
    iconCircle: 'steth_circle_color',
    iconColor: 'ether_color',
    coinpaprikaTicker: 'steth-lido-staked-ether',
    color: '#0B91DD',
    background: 'linear-gradient(143.37deg, #00A3FF 15.97%, #0B91DD 81.1%), #FFFFFF',
    bannerIcon: staticFilesRuntimeUrl('/static/img/tokens/eth.png'),
    bannerGif: staticFilesRuntimeUrl('/static/img/tokens/eth.gif'),
    tags: [],
  },
  {
    symbol: 'MKR',
    precision: 18,
    digits: 5,
    name: 'Maker',
    icon: 'mkr_circle_color',
    iconCircle: 'mkr_circle_color',
    iconColor: 'ether_color',
    coinpaprikaTicker: 'mkr-maker',
    coinbaseTicker: 'mkr-usd',
    color: '#1AAB9B',
    background: 'linear-gradient(133.41deg, #1AAB9B 17.25%, #22CAB7 86.54%), #FFFFFF',
    bannerIcon: staticFilesRuntimeUrl('/static/img/tokens/eth.png'),
    bannerGif: staticFilesRuntimeUrl('/static/img/tokens/eth.gif'),
    tags: [],
  },
  {
    symbol: 'WETH',
    precision: 18,
    digits: 5,
    name: 'Wrapped Ether',
    icon: 'weth_circle_color',
    iconCircle: 'weth_circle_color',
    iconColor: 'ether_color',
    coinpaprikaTicker: 'weth-weth',
    color: '#1AAB9B',
    background: 'linear-gradient(133.41deg, #1AAB9B 17.25%, #22CAB7 86.54%), #FFFFFF',
    bannerIcon: staticFilesRuntimeUrl('/static/img/tokens/eth.png'),
    bannerGif: staticFilesRuntimeUrl('/static/img/tokens/eth.gif'),
    tags: [],
  },
  {
    symbol: 'ETH',
    precision: 18,
    digits: 5,
    maxSell: '10000000',
    name: 'Ether',
    icon: 'ether',
    iconCircle: 'ether_circle_color',
    iconColor: 'ether_color',
    coinpaprikaTicker: 'eth-ethereum',
    coinbaseTicker: 'eth-usd',
    color: '#667FE3',
    background: 'linear-gradient(160.47deg, #F0F3FD 0.35%, #FCF0FD 99.18%), #FFFFFF',
    bannerIcon: staticFilesRuntimeUrl('/static/img/tokens/eth.png'),
    bannerGif: staticFilesRuntimeUrl('/static/img/tokens/eth.gif'),
    tags: [],
  },
  {
    symbol: 'BAT',
    precision: 18,
    digits: 5,
    name: 'Basic Attention Token',
    icon: 'bat',
    iconCircle: 'bat_circle_color',
    iconColor: 'bat_color',
    color: '#ff4625',
    bannerIcon: '',
    background: '',
    bannerGif: '',
    tags: [],
  },
  {
    symbol: 'WBTC',
    precision: 8,
    digits: 5,
    digitsInstant: 3,
    safeCollRatio: 1.5,
    maxSell: '1000000000000000',
    name: 'Wrapped Bitcoin',
    icon: 'wbtc',
    iconCircle: 'wbtc_circle_color',
    iconColor: 'wbtc_circle_color',
    coinpaprikaTicker: 'wbtc-wrapped-bitcoin',
    color: '#f09242',
    background: 'linear-gradient(147.66deg, #FEF1E1 0%, #FDF2CA 88.25%)',
    bannerIcon: staticFilesRuntimeUrl('/static/img/tokens/wbtc.png'),
    bannerGif: staticFilesRuntimeUrl('/static/img/tokens/wbtc.gif'),
    tags: [],
    rootToken: 'BTC',
  },
  {
    symbol: 'RENBTC',
    precision: 8,
    digits: 5,
    digitsInstant: 3,
    safeCollRatio: 1.5,
    maxSell: '1000000000000000',
    name: 'renBTC',
    icon: 'renbtc',
    iconCircle: 'renbtc_circle_color',
    iconColor: 'renbtc_circle_color',
    coinpaprikaTicker: 'renbtc-renbtc',
    color: '#838489',
    background: 'linear-gradient(160.47deg, #F1F5F5 0.35%, #E5E7E8 99.18%), #FFFFFF',
    bannerIcon: staticFilesRuntimeUrl('/static/img/tokens/renBTC.png'),
    bannerGif: staticFilesRuntimeUrl('/static/img/tokens/renBTC.gif'),
    tags: [],
    rootToken: 'BTC',
  },
  {
    symbol: 'TUSD',
    precision: 18,
    digits: 2,
    name: 'Trust token',
    icon: 'tusd',
    iconCircle: 'tusd_circle_color',
    iconColor: 'tusd_color',
    color: '#195aff',
    bannerIcon: '',
    background: '',
    bannerGif: '',
    tags: ['stablecoin'],
  },
  {
    symbol: 'KNC',
    precision: 18,
    digits: 5,
    name: 'Kyber Network',
    icon: 'kyber',
    iconCircle: 'kyber_circle_color',
    iconColor: 'kyber_color',
    color: '#30cb9e',
    bannerIcon: '',
    background: '',
    bannerGif: '',
    tags: [],
  },
  {
    symbol: 'MANA',
    precision: 18,
    digits: 5,
    name: 'Decentraland',
    icon: 'mana',
    iconCircle: 'mana_circle_color',
    iconColor: 'mana_color',
    color: '#f05',
    coinbaseTicker: 'MANA-USD',
    background: 'linear-gradient(160.26deg, #FFEAEA 5.25%, #FFF5EA 100%), #FFFFFF',
    bannerIcon: staticFilesRuntimeUrl('/static/img/tokens/mana.png'),
    bannerGif: staticFilesRuntimeUrl('/static/img/tokens/mana.gif'),
    tags: [],
  },
  {
    symbol: 'PAXUSD',
    precision: 18,
    digits: 2,
    name: 'Paxos Standard',
    icon: 'pax',
    iconCircle: 'pax_circle_color',
    iconColor: 'pax_color',
    color: '#005121',
    bannerIcon: '',
    background: '',
    bannerGif: '',
    tags: ['stablecoin'],
  },
  {
    symbol: 'USDT',
    precision: 6,
    digits: 2,
    name: 'Tether',
    icon: 'usdt',
    iconCircle: 'usdt_circle_color',
    iconColor: 'usdt_color',
    color: '259c77',
    bannerIcon: '',
    background: '',
    bannerGif: '',
    tags: ['stablecoin'],
  },
  {
    symbol: 'COMP',
    precision: 18,
    digits: 5,
    name: 'Compound',
    icon: 'compound',
    iconCircle: 'compound_circle_color',
    iconColor: 'compound_color',
    color: '#00D395',
    bannerIcon: '',
    background: '',
    bannerGif: '',
    tags: [],
  },
  {
    symbol: 'LRC',
    precision: 18,
    digits: 5,
    name: 'Loopring',
    icon: 'lrc',
    iconCircle: 'lrc_circle_color',
    iconColor: 'lrc_color',
    color: '#1c60ff',
    bannerIcon: '',
    background: '',
    bannerGif: '',
    tags: [],
  },
  {
    symbol: 'LINK',
    precision: 18,
    digits: 5,
    name: 'Chainlink',
    icon: 'chainlink',
    iconCircle: 'chainlink_circle_color',
    iconColor: 'chainlink_color',
    color: '#375bd2',
    coinbaseTicker: 'LINK-USD',
    background: 'linear-gradient(160.47deg, #E0E8F5 0.35%, #F0FBFD 99.18%), #FFFFFF',
    bannerIcon: staticFilesRuntimeUrl('/static/img/tokens/link.png'),
    bannerGif: staticFilesRuntimeUrl('/static/img/tokens/link.gif'),
    tags: [],
  },
  {
    symbol: 'GUSD',
    precision: 2,
    digits: 2,
    name: 'Gemini dollar',
    icon: 'gemini',
    iconCircle: 'gemini_circle_color',
    iconColor: 'gemini_color',
    color: '#25ddfb',
    coinpaprikaTicker: 'gusd-gemini-dollar',
    background: 'linear-gradient(158.87deg, #E2F7F9 0%, #D3F3F5 100%), #FFFFFF',
    bannerIcon: staticFilesRuntimeUrl('/static/img/tokens/gusd.png'),
    bannerGif: staticFilesRuntimeUrl('/static/img/tokens/gusd.gif'),
    tags: ['stablecoin'],
  },
  {
    symbol: 'ZRX',
    precision: 18,
    digits: 5,
    name: '0x',
    icon: 'zerox',
    iconCircle: 'zerox_circle_color',
    iconColor: 'zerox_color',
    color: '#000',
    bannerIcon: '',
    background: '',
    bannerGif: '',
    tags: [],
  },
  {
    symbol: 'USDC',
    precision: 6,
    digits: 6,
    digitsInstant: 2,
    maxSell: '1000000000000000',
    name: 'USD Coin',
    icon: 'usdc',
    iconCircle: 'usdc_circle_color',
    iconColor: 'usdc_circle_color',
    coinpaprikaTicker: 'usdc-usd-coin',
    color: '#2775ca',
    background: 'linear-gradient(152.45deg, #0666CE 8.53%, #61A9F8 91.7%)',
    bannerIcon: staticFilesRuntimeUrl('/static/img/tokens/usdc.png'),
    bannerGif: staticFilesRuntimeUrl('/static/img/tokens/usdc.gif'),
    tags: ['stablecoin'],
  },
  {
    symbol: 'BAL',
    precision: 18,
    digits: 5,
    digitsInstant: 2,
    name: 'Balancer',
    icon: 'usdc',
    iconCircle: 'bal_circle',
    iconColor: 'bal_circle_color',
    color: '#000',
    bannerIcon: '',
    background: '',
    bannerGif: '',
    tags: [],
  },
  {
    symbol: 'YFI',
    precision: 18,
    digits: 5,
    digitsInstant: 2,
    name: 'Yearn',
    icon: 'usdc',
    iconCircle: 'yfi_circle_color',
    iconColor: 'yfi_circle_color',
    coinbaseTicker: 'YFI-USD',
    color: '#0657f9',
    background: 'linear-gradient(160.47deg, #E0E8F5 0.35%, #F0FBFD 99.18%), #FFFFFF',
    bannerIcon: staticFilesRuntimeUrl('/static/img/tokens/yfi.png'),
    bannerGif: staticFilesRuntimeUrl('/static/img/tokens/yfi.gif'),
    tags: [],
  },
  {
    symbol: 'UNI',
    precision: 18,
    digits: 5,
    digitsInstant: 2,
    name: 'Uniswap',
    icon: 'uni_circle_color',
    iconCircle: 'uni_circle_color',
    iconColor: 'uni_circle_color',
    color: '#ff077d',
    coinbaseTicker: 'UNI-USD',
    background: 'linear-gradient(160.65deg, #FDEEF3 2.52%, #FFE6F5 101.43%), #FFFFFF',
    bannerIcon: staticFilesRuntimeUrl('/static/img/tokens/uni_old.png'),
    bannerGif: staticFilesRuntimeUrl('/static/img/tokens/uni_old.gif'),
    tags: [],
  },
  {
    symbol: 'AAVE',
    precision: 18,
    digits: 5,
    digitsInstant: 2,
    name: 'Aave',
    icon: 'aave_circle_color',
    iconCircle: 'aave_circle_color',
    iconColor: 'aave_circle_color',
    color: '#ff077d',
    background: 'linear-gradient(286.73deg, #B6509E 2.03%, #2EBAC6 100%)',
    bannerIcon: staticFilesRuntimeUrl('/static/img/banner_icons/aave.svg'),
    bannerGif: '',
    tags: [],
  },
  {
    symbol: 'UNIV2USDCETH',
    precision: 18,
    digits: 5,
    digitsInstant: 2,
    name: 'UNIV2USDCETH',
    icon: 'univ2_usdc_eth_circles_color',
    iconCircle: 'univ2_usdc_eth_circles_color',
    iconColor: 'univ2_usdc_eth_circles_color',
    color: '#ff077d',
    background: 'linear-gradient(160.47deg, #F0F3FD 0.35%, #FCF0FD 99.18%), #FFFFFF',
    bannerIcon: staticFilesRuntimeUrl('/static/img/tokens/uni_old_usdc_eth.png'),
    bannerGif: staticFilesRuntimeUrl('/static/img/tokens/uni_old_usdc_eth.gif'),
    tags: ['lp-token'],
  },
  {
    symbol: 'UNIV2DAIUSDC',
    precision: 18,
    digits: 5,
    digitsInstant: 2,
    name: 'UNIV2DAIUSDC',
    icon: 'univ2_dai_usdc_circles_color',
    iconCircle: 'univ2_dai_usdc_circles_color',
    iconColor: 'univ2_dai_usdc_circles_color',
    color: '#ff077d',
    background: 'linear-gradient(160.47deg, #E0E8F5 0.35%, #F0FBFD 99.18%), #FFFFFF',
    bannerIcon: staticFilesRuntimeUrl('/static/img/tokens/uni_old_dai_usdc.png'),
    bannerGif: staticFilesRuntimeUrl('/static/img/tokens/uni_old_dai_usdc.gif'),
    tags: ['lp-token'],
  },
  {
    symbol: 'UNIV2WBTCETH',
    precision: 18,
    digits: 5,
    digitsInstant: 2,
    name: 'UNIV2WBTCETH',
    icon: 'univ2_wbtc_eth_circles_color',
    iconCircle: 'univ2_wbtc_eth_circles_color',
    iconColor: 'univ2_wbtc_eth_circles_color',
    color: '#ff077d',
    background: 'linear-gradient(160.47deg, #F0F3FD 0.35%, #FCF0FD 99.18%), #FFFFFF',
    bannerIcon: staticFilesRuntimeUrl('/static/img/tokens/uni_old_wbtc_dai.png'),
    bannerGif: staticFilesRuntimeUrl('/static/img/tokens/uni_old_wbtc_eth.gif'),
    tags: ['lp-token'],
  },
  {
    symbol: 'UNIV2DAIETH',
    precision: 18,
    digits: 5,
    digitsInstant: 2,
    name: 'UNIV2DAIETH',
    icon: 'univ2_dai_eth_circles_color',
    iconCircle: 'univ2_dai_eth_circles_color',
    iconColor: 'univ2_dai_eth_circles_color',
    color: '#ff077d',
    background: 'linear-gradient(160.47deg, #F0F3FD 0.35%, #FCF0FD 99.18%), #FFFFFF',
    bannerIcon: staticFilesRuntimeUrl('/static/img/tokens/uni_old_dai_eth.png'),
    bannerGif: staticFilesRuntimeUrl('/static/img/tokens/uni_old_dai_eth.gif'),
    tags: ['lp-token'],
  },
  {
    symbol: 'UNIV2ETHUSDT',
    precision: 18,
    digits: 5,
    digitsInstant: 2,
    name: 'UNIV2ETHUSDT',
    icon: 'univ2_eth_usdt_circles_color',
    iconCircle: 'univ2_eth_usdt_circles_color',
    iconColor: 'univ2_eth_usdt_circles_color',
    color: '#ff077d',
    bannerIcon: '',
    background: '',
    bannerGif: '',
    tags: ['lp-token'],
  },
  {
    symbol: 'UNIV2UNIETH',
    precision: 18,
    digits: 5,
    digitsInstant: 2,
    name: 'UNIV2UNIETH',
    icon: 'univ2_uni_eth_circles_color',
    iconCircle: 'univ2_uni_eth_circles_color',
    iconColor: 'univ2_uni_eth_circles_color',
    color: '#ff077d',
    background: 'linear-gradient(160.65deg, #FDEEF3 2.52%, #FFE6F5 101.43%), #FFFFFF',
    bannerIcon: staticFilesRuntimeUrl('/static/img/tokens/uni_old_uni_eth.png'),
    bannerGif: staticFilesRuntimeUrl('/static/img/tokens/uni_old_uni_eth.gif'),
    tags: ['lp-token'],
  },
  {
    symbol: 'UNIV2LINKETH',
    precision: 18,
    digits: 5,
    digitsInstant: 2,
    name: 'UNIV2LINKETH',
    icon: 'univ2_link_eth_circles_color',
    iconCircle: 'univ2_link_eth_circles_color',
    iconColor: 'univ2_link_eth_circles_color',
    color: '#ff077d',
    bannerIcon: '',
    background: '',
    bannerGif: '',
    tags: ['lp-token'],
  },
  {
    symbol: 'UNIV2WBTCDAI',
    precision: 18,
    digits: 5,
    digitsInstant: 2,
    name: 'UNIV2WBTCDAI',
    icon: 'univ2_wbtc_dai_circles_color',
    iconCircle: 'univ2_wbtc_dai_circles_color',
    iconColor: 'univ2_wbtc_dai_circles_color',
    color: '#ff077d',
    background: 'linear-gradient(147.66deg, #FEF1E1 0%, #FDF2CA 88.25%)',
    bannerIcon: staticFilesRuntimeUrl('/static/img/tokens/uni_old_wbtc_dai.png'),
    bannerGif: staticFilesRuntimeUrl('/static/img/tokens/uni_old_wbtc_dai.gif'),
    tags: ['lp-token'],
  },
  {
    symbol: 'UNIV2AAVEETH',
    precision: 18,
    digits: 5,
    digitsInstant: 2,
    name: 'UNIV2AAVEETH',
    icon: 'univ2_aave_eth_circles_color',
    iconCircle: 'univ2_aave_eth_circles_color',
    iconColor: 'univ2_aave_eth_circles_color',
    color: '#ff077d',
    bannerIcon: '',
    background: '',
    bannerGif: '',
    tags: ['lp-token'],
  },
  {
    symbol: 'UNIV2DAIUSDT',
    precision: 18,
    digits: 5,
    digitsInstant: 2,
    name: 'UNIV2DAIUSDT',
    icon: 'univ2_dai_usdt_circles_color',
    iconCircle: 'univ2_dai_usdt_circles_color',
    iconColor: 'univ2_dai_usdt_circles_color',
    color: '#ff077d',
    bannerIcon: '',
    background: '',
    bannerGif: '',
    tags: ['lp-token'],
  },
  {
    symbol: 'GUNIV3DAIUSDC1',
    precision: 18,
    digits: 5,
    digitsInstant: 2,
    name: 'GUNIV3 DAI/USDC 0.05%',
    icon: 'guniv3_dai_usdc1_circles_color',
    iconCircle: 'guniv3_dai_usdc1_circles_color',
    iconColor: 'guniv3_dai_usdc1_circles_color',
    color: '#ff077d',
    background: 'linear-gradient(171.29deg, #FDDEF0 -2.46%, #FFF0F9 -2.45%, #FFF6F1 99.08%)',
    bannerIcon: staticFilesRuntimeUrl('/static/img/tokens/uni_old_dai_usdc.png'),
    bannerGif: staticFilesRuntimeUrl('/static/img/tokens/uni_old_dai_usdc.gif'),
    tags: ['lp-token'],
    token0: 'DAI',
    token1: 'USDC',
  },
  {
    symbol: 'GUNIV3DAIUSDC2',
    precision: 18,
    digits: 5,
    digitsInstant: 2,
    name: 'GUNIV3 DAI/USDC 0.01%',
    icon: 'guniv3_dai_usdc1_circles_color',
    iconCircle: 'guniv3_dai_usdc1_circles_color',
    iconColor: 'guniv3_dai_usdc1_circles_color',
    color: '#ff077d',
    background: 'linear-gradient(171.29deg, #FDDEF0 -2.46%, #FFF0F9 -2.45%, #FFF6F1 99.08%)',
    bannerIcon: staticFilesRuntimeUrl('/static/img/tokens/uni_old_dai_usdc.png'),
    bannerGif: staticFilesRuntimeUrl('/static/img/tokens/uni_old_dai_usdc.gif'),
    tags: ['lp-token'],
    token0: 'DAI',
    token1: 'USDC',
  },
  {
    symbol: 'MATIC',
    precision: 18,
    digits: 5,
    digitsInstant: 2,
    name: 'MATIC',
    icon: 'matic_circle_color',
    iconCircle: 'matic_circle_color',
    iconColor: 'matic_circle_color',
    color: '#ff077d',
    coinbaseTicker: 'MATIC-USD',
    background: 'linear-gradient(160.47deg, #F0F3FD 0.35%, #FCF0FD 99.18%), #FFFFFF',
    bannerIcon: staticFilesRuntimeUrl('/static/img/tokens/matic.png'),
    bannerGif: staticFilesRuntimeUrl('/static/img/tokens/matic.gif'),
    tags: [],
  },
  {
    symbol: 'WSTETH',
    precision: 18,
    digits: 5,
    digitsInstant: 2,
    name: 'WSTETH',
    icon: 'wsteth_circle_color',
    iconCircle: 'wsteth_circle_color',
    iconColor: 'wsteth_circle_color',
    coinGeckoTicker: 'wrapped-steth',
    color: '#ff077d',
    background: 'linear-gradient(158.87deg, #E2F7F9 0%, #D3F3F5 100%), #FFFFFF',
    bannerIcon: staticFilesRuntimeUrl('/static/img/tokens/wstETH.png'),
    bannerGif: staticFilesRuntimeUrl('/static/img/tokens/wstETH.gif'),
    tags: [],
    rootToken: 'ETH',
  },
  {
    symbol: 'DAI',
    precision: 18,
    digits: 4,
    maxSell: '10000000',
    name: 'Dai',
    icon: 'dai',
    iconCircle: 'dai_circle_color',
    iconColor: 'dai_color',
    coinpaprikaTicker: 'dai-dai',
    coinbaseTicker: 'dai-usd',
    color: '#fdc134',
    bannerIcon: '',
    background: '',
    bannerGif: '',
    tags: ['stablecoin'],
  },
  {
    symbol: 'CRVV1ETHSTETH',
    precision: 18,
    digits: 5,
    digitsInstant: 2,
    name: 'stETH/ETH CRV',
    icon: 'curve_circle_color',
    iconCircle: 'curve_circle_color',
    iconColor: 'curve_circle_color',
    color: '#ff077d',
    background: 'linear-gradient(160.47deg, #F0F3FD 0.35%, #FCF0FD 99.18%), #FFFFFF',
    bannerIcon: staticFilesRuntimeUrl('/static/img/tokens/crv_steth_eth.png'),
    bannerGif: staticFilesRuntimeUrl('/static/img/tokens/crv_steth_eth.gif'),
    tags: ['lp-token'],
  },
]

// ticker comes from coinpaprika api https://api.coinpaprika.com/v1/tickers
const tokensBySymbol = keyBy(tokens, 'symbol')

export function getToken(tokenSymbol: string) {
  if (!tokensBySymbol[tokenSymbol]) {
    throw new Error(`No meta information for token: ${tokenSymbol}`)
  }
  return tokensBySymbol[tokenSymbol]
}

export const ALLOWED_MULTIPLY_TOKENS = tokens
  .filter(
    (token) => !(token.tags as CoinTag[]).some((tag) => tag === 'lp-token' || tag === 'stablecoin'),
  )
  .map((token) => token.symbol)

export const LP_TOKENS = tokens
  .filter((token) => (token.tags as CoinTag[]).includes('lp-token'))
  .map((lpToken) => lpToken.symbol)

export const BTC_TOKENS = tokens
  .filter((token) => token.rootToken === 'BTC' || token.symbol === 'BTC')
  .map((btcToken) => btcToken.symbol)

export const ETH_TOKENS = tokens
  .filter((token) => token.rootToken === 'ETH' || token.symbol === 'ETH')
  .map((ethToken) => ethToken.symbol)

export const ONLY_MULTIPLY_TOKENS = ['GUNIV3DAIUSDC1', 'GUNIV3DAIUSDC2']

const ALLOWED_AUTOMATION_ILKS: Record<string, string[]> = {
  main: [
    'ETH-A',
    'ETH-B',
    'ETH-C',
    'WBTC-A',
    'WBTC-B',
    'WBTC-C',
    'WSTETH-A',
    'WSTETH-B',
    'RENBTC-A',
    'YFI-A',
    'UNI-A',
    'LINK-A',
    'MANA-A',
  ],
  goerli: ['ETH-A', 'ETH-B', 'ETH-C', 'WSTETH-A', 'WBTC-A', 'WBTC-B', 'WBTC-C'],
}

export function isSupportedAutomationIlk(network: string, ilk: string) {
  const key = network in ALLOWED_AUTOMATION_ILKS ? network : 'main'
  return ALLOWED_AUTOMATION_ILKS[key].includes(ilk)
}
