# 测试篇


```java
   @Override
    public BlockchainInfo queryBlockById(){
        BlockchainInfo blockchainInfo = null;
        try {
            blockchainInfo = getChannel().queryBlockchainInfo();
        } catch (InvalidArgumentException e) {
            LOGGER.error(e.getMessage());
            throw new AppException(PeerProxyCodeBean.PeerProxyCode.FABRIC_INVALIDARGUMENT_EXCEPTION.code,
                    e.getMessage());
        } catch (ProposalException e) {
            LOGGER.error(e.getMessage());
            throw new AppException(PeerProxyCodeBean.PeerProxyCode.FABRIC_PROPOSAL_EXCEPTION.code, e.getMessage());
        }catch (Exception e){
            LOGGER.error(e.getMessage());
        }
        return blockchainInfo;

    }
```
测试

测试

测试

测试

测试

测试

测试

测试

测试

测试

测试

测试

测试

测试

测试

测试

测试

测试

测试

测试

测试

测试

测试

测试

测试

测试

测试

测试

测试

测试

测试

测试

测试

测试

测试

测试

测试

测试

测试

测试

测试

测试

测试

测试

测试

测试

测试

测试

测试

测试

测试

测试

测试

测试

测试

测试

测试

测试

测试

测试

测试

测试

测试

测试

测试

测试

测试

测试

测试

测试

测试

测试