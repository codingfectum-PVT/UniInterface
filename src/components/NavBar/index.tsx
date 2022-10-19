import { Trans } from '@lingui/macro'
import { useWeb3React } from '@web3-react/core'
import Web3Status from 'components/Web3Status'
import { useNftFlag } from 'featureFlags/flags/nft'
import { chainIdToBackendName } from 'graphql/data/util'
import { Box } from 'nft/components/Box'
import { Row } from 'nft/components/Flex'
// import { UniIcon } from 'nft/components/icons'
import { ReactNode } from 'react'
import { NavLinkProps, useLocation } from 'react-router-dom'
import styled from 'styled-components/macro'

// import { ChainSelector } from './ChainSelector'
// import { MenuDropdown } from './MenuDropdown'
// import { SearchBar } from './SearchBar'
// import { ShoppingBag } from './ShoppingBag'
import * as styles from './style.css'

interface MenuItemProps {
  href: string
  id?: NavLinkProps['id']
  isActive?: boolean
  children: ReactNode
}

const LinkItems = styled.a`
  color: #ffffff;
  background-color: unset;
  border-radius: 0px; 
  border-bottom: 2px solid transparent;

  &:hover,&active,&:nth-child(1){
    color: #d3ac6a;
    border-color: #d3ac6a;
  }

`
const MenuItem = ({ href, id, isActive, children }: MenuItemProps) => {
  return (
    <LinkItems
      href={href}
      className={isActive ? styles.activeMenuItem : styles.menuItem}
      id={id}
      style={{ textDecoration: 'none' }}
    >
      {children}
    </LinkItems>
  )
}

const PageTabs = () => {
  const { pathname } = useLocation()
  const nftFlag = useNftFlag()
  const { chainId: connectedChainId } = useWeb3React()
  const chainName = chainIdToBackendName(connectedChainId)

  const isPoolActive =
    pathname.startsWith('/pool') ||
    pathname.startsWith('/add') ||
    pathname.startsWith('/remove') ||
    pathname.startsWith('/increase') ||
    pathname.startsWith('/find')

  return (
    <>
      <MenuItem href="#/swap" isActive={pathname.startsWith('/swap')}>
        <Trans>Buy</Trans>
      </MenuItem>
      <MenuItem href={`https://www.dextools.io/app/ether/pair-explorer/0x2eda072ab9203cfdf22c8793602f2e1020fabec2`}>
        <Trans>Chart</Trans>
      </MenuItem>
      <MenuItem href={`https://tsuka2.org/#about`} >
        <Trans>About</Trans>
      </MenuItem>
      <MenuItem href={`https://tsuka2.org/#tokenomics`}>
        <Trans>Tokenomics</Trans>
      </MenuItem>
    </>
  )
}

const Navbar = () => {
  const { pathname } = useLocation()
  const showShoppingBag = pathname.startsWith('/nfts') || pathname.startsWith('/profile')

  return (
    <>
      <nav style={{ width: '100%', maxWidth: 1300, margin: 'auto', padding: '10px' }}>
        <Box display="flex" height="full" flexWrap="nowrap" alignItems="stretch" justifyContent="space-between">
          <Box>
            <Box as="a" href="#/swap" className={styles.logoContainer}>
              <img src='./images/logo.png' style={{ width: 'auto', height: 50 }} />
            </Box>
          </Box>
          <Box display="flex" >
            <Row gap="4" display={{ sm: 'none', lg: 'flex' }}>
              <PageTabs />
            </Row>
            <Row gap="4">
              <Web3Status />
            </Row>
          </Box>
        </Box>
      </nav>
      <Box className={styles.mobileBottomBar}>
        <PageTabs />
      </Box>
    </>
  )
}

export default Navbar
