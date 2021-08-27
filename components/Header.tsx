// @ts-ignore
import { Icon } from '@makerdao/dai-ui-icons'
import { trackingEvents } from 'analytics/analytics'
import { AppLink } from 'components/Links'
import { AccountButton } from 'features/account/Account'
import { useObservable } from 'helpers/observableHook'
import { staticFilesRuntimeUrl } from 'helpers/staticPaths'
import { WithChildren } from 'helpers/types'
import { useTranslation } from 'next-i18next'
import getConfig from 'next/config'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import { TRANSITIONS } from 'theme'
import { Card, Box, Container, Flex, Image, SxStyleProp, Text } from 'theme-ui'

import { useAppContext } from './AppContextProvider'
const {
  publicRuntimeConfig: { apiHost },
} = getConfig()

export function Logo({ sx }: { sx?: SxStyleProp }) {
  return (
    <AppLink
      withAccountPrefix={false}
      href="/"
      sx={{
        color: 'primary',
        fontWeight: 'semiBold',
        fontSize: 5,
        cursor: 'pointer',
        zIndex: 1,
        ...sx,
      }}
    >
      <Image src={staticFilesRuntimeUrl('/static/img/logo.svg')} />
    </AppLink>
  )
}

export function BasicHeader({
  variant,
  children,
  sx,
}: { variant?: string; sx?: SxStyleProp } & WithChildren) {
  return (
    <Box as="header" sx={{ position: 'relative', zIndex: 'menu' }}>
      <Container
        variant={variant}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mt: 2,
          p: 3,
          mb: 3,
          minHeight: '83px',
          ...sx,
        }}
      >
        {children}
      </Container>
    </Box>
  )
}

export function BackArrow() {
  return (
    <Box
      sx={{
        cursor: 'pointer',
        color: 'onBackground',
        fontSize: '0',
        transition: TRANSITIONS.global,
        '&:hover': {
          color: 'onSurface',
        },
      }}
    >
      <Icon name="arrow_left" size="auto" width="32" height="47" />
    </Box>
  )
}

function ConnectedHeader() {
  const { accountData$, context$ } = useAppContext()
  const { t } = useTranslation()
  const accountData = useObservable(accountData$)
  const context = useObservable(context$)

  const numberOfVaults =
    accountData?.numberOfVaults !== undefined ? accountData.numberOfVaults : undefined
  const firstCDP = numberOfVaults ? numberOfVaults === 0 : undefined
  
  return <BasicHeader
    sx={{
      position: 'relative',
      flexDirection: ['column-reverse', 'row', 'row'],
      alignItems: ['flex-end', 'center', 'center'],
      zIndex: 1,
    }}
    variant="appContainer"
  >
    <>
      <Logo sx={{ position: ['absolute', 'static', 'static'], left: 3, top: 3 }} />
      <Flex sx={{ ml: 'auto', zIndex: 1, mt: [3, 0, 0] }}>
        <AppLink
          variant="nav"
          sx={{ mr: 4 }}
          href={`/owner/${context?.account}`}
          onClick={() => trackingEvents.yourVaults()}
        >
          {t('your-vaults')} {numberOfVaults ? numberOfVaults > 0 && `(${numberOfVaults})` : ''}
        </AppLink>
        <AppLink
          variant="nav"
          sx={{ mr: [0, 4, 4] }}
          href="/vaults/list"
          onClick={() => trackingEvents.createNewVault(firstCDP)}
        >
          {t('open-new-vault')}
        </AppLink>
      </Flex>
      <AccountButton />
    </>
  </BasicHeader>
}

const HEADER_LINKS = {
  'dai-wallet': `${apiHost}/daiwallet`,
  'learn': 'https://kb.oasis.app',
  'blog': 'https://blog.oasis.app'
}

function HeaderDropdown({ title, children }: { title : string } & WithChildren) {
  const dropdown = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleDocumentClick(e: { target: any }) {
      if (dropdown.current && !dropdown.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  });

  return <Box ref={dropdown} sx={{ position: 'relative'}}>
    <Box onClick={() => setIsOpen(!isOpen)}>
      {title} <Icon name="caret_down" size="7.75px" />
    </Box>
    <Card sx={{ position: 'absolute', top: '100%', display: isOpen ? 'block' : 'none'}}>
      {children}
    </Card>
  </Box>
}

function LanguageDropdown() {
  const { t, i18n } = useTranslation()
  const router = useRouter()
  const { locales }: { locales: string[]} = i18n.options
  
  return <HeaderDropdown title={t(`lang-dropdown.${i18n.language}`)}>
    {locales
      .filter(lang => lang !== i18n.language)
      .map(lang => <Text onClick={() => router.push(router.asPath, router.asPath, { locale: lang })}>
        {t(`lang-dropdown.${lang}`)}
      </Text>
      )
    }
  </HeaderDropdown>
}

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      // prevent scroll when menu is open
      document.body.style.overflow = "hidden"
      document.body.style.height = "100vh"
      document.body.style.position = 'fixed';
      document.body.style.top = `-${window.scrollY}px`
    } else {
      const scrollY = document.body.style.top
      document.body.style.position = ''
      document.body.style.top = ''
      window.scrollTo(0, parseInt(scrollY || '0') * -1)
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.height = ''
      document.body.style.position = ''
      document.body.style.top = ''
    }
  }, [isOpen])

  return <>
    <Box sx={{ 
      backgroundColor: 'background', 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      right: 0, 
      zIndex: 'mobileMenu',
      transition: 'opacity ease-in 0.2s',
      height: isOpen ? '100vh' : 0,
      opacity: isOpen ? 1 : 0,
      overflow: 'hidden'
    }}>
      <Box>
        - Links here -
      </Box>
    </Box>
    <Icon 
      name={ isOpen ? 'close': 'menu'} 
      sx={{zIndex: 'mobileMenu', position: 'absolute', top: 3, right: 3}} 
      onClick={() => setIsOpen(!isOpen)} 
    />
  </>
}

function DisconnectedHeader() {
  const { t } = useTranslation()

  return (
    <>
      <Box sx={{ display: ['none', 'block']}}>
        <BasicHeader>
          <Flex sx={{ '& > *': { mr: 5 }}}>
            <Logo />
            <HeaderDropdown title={t('nav.products')}>
              <AppLink href={HEADER_LINKS['dai-wallet']}>{t('nav.dai-wallet')}</AppLink>
              <Text variant="strong">Borrow</Text>
            </HeaderDropdown>
            <AppLink href={HEADER_LINKS['learn']}>{t('nav.learn')}</AppLink>
            <AppLink href={HEADER_LINKS['blog']}>{t('nav.blog')}</AppLink>
          </Flex>
          <Flex sx={{ '& > *': { ml: 4 }}}>
            <AppLink href="/connect">{t('connect-wallet')}</AppLink>
            <LanguageDropdown />
          </Flex>
        </BasicHeader>
      </Box>
      <Box sx={{ display: ['block', 'none']}}>
        <Logo sx={{ position: 'absolute', left: 3, top: 3 }} />
        <MobileMenu />
      </Box>
    </>
  )
}

export function AppHeader() {
  const { context$ } = useAppContext()
  const context = useObservable(context$)

  return context?.status === 'connected' ?
    <ConnectedHeader /> : <DisconnectedHeader />
}

export function ConnectPageHeader() {
  return (
    <BasicHeader>
      <Logo />
    </BasicHeader>
  )
}
