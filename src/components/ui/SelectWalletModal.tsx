import React, { FunctionComponent } from "react"
import styled from "styled-components"

import { Wallet } from "../../types"
import { BaseModal, BaseModalProps } from "./BaseModal"

export interface SelectWalletModalProps extends BaseModalProps {
  wallets: Wallet[]
  selectWallet: (wallet: Wallet) => void
}

export const SelectWalletModal: FunctionComponent<SelectWalletModalProps> = ({
  wallets,
  selectWallet,
  classNames,
  ...props
}) => (
  <BaseModal classNames={classNames} title="Select a wallet" {...props}>
    <WalletList className={classNames?.walletList}>
      {wallets.map((wallet) => (
        <WalletRow
          key={wallet.type}
          className={classNames?.wallet}
          onClick={(e) => {
            e.preventDefault()
            selectWallet(wallet)
          }}
        >
          <WalletIconImg
            alt="keplr logo"
            className={classNames?.walletImage}
            src={wallet.imageUrl}
          />
          <WalletInfo className={classNames?.walletInfo}>
            <WalletName className={classNames?.walletName}>
              {wallet.name}
            </WalletName>
            <WalletDescription className={classNames?.walletDescription}>
              {wallet.description}
            </WalletDescription>
          </WalletInfo>
        </WalletRow>
      ))}
    </WalletList>
  </BaseModal>
)

const WalletList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const WalletRow = styled.div`
  border-radius: 1rem;
  padding: 1.25rem;
  display: flex;
  align-items: center;
  background: black;
  border: 1px solid rgb(255 255 255 / 0.1);

  &:hover {
    cursor: pointer;
  }
`

const WalletIconImg = styled.img`
  width: 4rem;
  height: 4rem;
`

const WalletInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.25rem;
  color: white;
`

const WalletName = styled.div`
  color: white;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.25rem;
`

const WalletDescription = styled.div`
  color: white;
  margin-top: 0.125rem;
`
