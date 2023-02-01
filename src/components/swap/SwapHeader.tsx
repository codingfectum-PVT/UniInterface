import { Trans } from '@lingui/macro'
import { Percent } from '@uniswap/sdk-core'
import styled from 'styled-components/macro'

import { ThemedText } from '../../theme'
import { RowBetween, RowFixed } from '../Row'
import SettingsTab from '../Settings'

const StyledSwapHeader = styled.div`
  padding: 8px 12px;
  margin-bottom: 8px;
  width: 100%;
  color: ${({ theme }) => theme.deprecated_text2};
`

export default function SwapHeader({ allowedSlippage }: { allowedSlippage: Percent }) {
  return (
    <StyledSwapHeader>
      <RowBetween>
        <RowFixed>
          <ThemedText.DeprecatedBlack fontWeight={500} fontSize={20} style={{ marginRight: '8px' }}></ThemedText.DeprecatedBlack>
        </RowFixed>
        <RowFixed>
          <SettingsTab placeholderSlippage={allowedSlippage} />
        </RowFixed>
      </RowBetween>
      <RowBetween style={{ justifyContent: 'center' }}>
        <RowFixed>
          <ThemedText.DeprecatedBlack fontWeight={500} fontSize={20} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>
            <img src="./images/swap.png" style={{ marginBottom: 10 }} />
            <Trans>Swap</Trans>
          </ThemedText.DeprecatedBlack>
        </RowFixed>
      </RowBetween>
    </StyledSwapHeader >
  )
}
