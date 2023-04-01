import Box from '@lyra/ui/components/Box'
import Card, { CardElement } from '@lyra/ui/components/Card'
import CardSeparator from '@lyra/ui/components/Card/CardSeparator'
import Flex from '@lyra/ui/components/Flex'
import Text from '@lyra/ui/components/Text'
import useIsMobile from '@lyra/ui/hooks/useIsMobile'
import { MarginProps } from '@lyra/ui/types'
import { AccountLyraBalances, LyraStakingAccount } from '@lyrafinance/lyra-js'
import React from 'react'

import { LatestRewardEpoch } from '@/app/hooks/rewards/useLatestRewardEpoch'

import RewardsNotStakedCardSection from './RewardsNotStakedCardSection'
import RewardsStakedCardSection from './RewardsStakedCardSection'

type Props = {
  latestRewardEpochs: LatestRewardEpoch[]
  lyraBalances: AccountLyraBalances
  lyraStakingAccount: LyraStakingAccount | null
} & MarginProps

const RewardsStakingCard = ({
  latestRewardEpochs,
  lyraBalances,
  lyraStakingAccount,
  ...marginProps
}: Props): CardElement => {
  const isMobile = useIsMobile()
  return (
    <Flex flexDirection="column">
      <Box px={[6, 0]} mb={5}>
        <Text mb={2} variant="title">
          Staking
        </Text>
        <Text color="secondaryText">
          Earn rewards by staking dionizio and get boosted rewards for trading and liquidity mining.
        </Text>
      </Box>
      <Card flexDirection={isMobile ? 'column' : 'row'} {...marginProps}>
        <RewardsStakedCardSection
          latestRewardEpochs={latestRewardEpochs}
          lyraBalances={lyraBalances}
          lyraStakingAccount={lyraStakingAccount}
        />
        <CardSeparator isVertical={!isMobile} />
        <RewardsNotStakedCardSection lyraBalances={lyraBalances} />
      </Card>
    </Flex>
  )
}

export default RewardsStakingCard
