# Azure OpenAI

[Guide](https://learn.microsoft.com/zh-cn/azure/cognitive-services/openai/)


# Vector Database
    Milvus

## Guide

[Azure + Milvus](https://milvus.io/docs/azure.md)

[Local PC + docker + Milvus](https://milvus.io/docs/v2.1.x/install_standalone-docker.md)

[Milvus Video](https://www.youtube.com/watch?v=w-YPoKOTeWE)

注意：教程里面有说执行命令：
    
    sudo docker-compose ps

如果出现报错：

    error getting credentials - err: exit status 1, out

可以把sudo去掉。

记得注意docker-compose.yml文件里面的Milvus版本和package.json里面的版本是否匹配！

[K8s Cluster + Milvus](https://milvus.io/docs/v2.1.x/install_cluster-milvusoperator.md)

This topic describes how to provision and create a cluster with Azure Kubernetes Service (AKS) and the Azure portal.

### Azure CLI

[Azure CLI](https://learn.microsoft.com/zh-cn/cli/azure/get-started-with-azure-cli)

### Kubernetes

[Kubernetes](https://zhuanlan.zhihu.com/p/53260098)

### Helm
[Helm](https://zhuanlan.zhihu.com/p/350328164)

## 单机个人电脑使用Milvus

[NodeJS + Milvus 教程](https://milvus.io/docs/v2.1.x/example_code_node.md)

[Demo](https://github.com/milvus-io/milvus-sdk-node)

[中文教程](https://zhuanlan.zhihu.com/p/405186060)

[中文教程](http://www.yishuifengxiao.com/2022/12/27/%E5%90%91%E9%87%8F%E6%90%9C%E7%B4%A2%E6%95%B0%E6%8D%AE%E5%BA%93milvus%E5%85%A5%E9%97%A8%E6%95%99%E7%A8%8B/)

## 术语

    Filed：类似表字段，可以是结构化数据，当然还可以是向量；
    Entity：一组Filed，类似表的一条数据；
    Collection：一组Entity，类似于表；

## OpenAI

[Milvus + OpenAI](https://milvus.io/docs/integrate_with_openai.md)

## 二维数据可视化
[二维数据可视化](https://github.com/openai/openai-cookbook/blob/main/examples/Visualizing_embeddings_in_2D.ipynb)

## Milvus GUI
[Milvus Gui](https://milvus.io/docs/v2.1.x/attu.md)

# React + TypeScript
[React + TypeScript](https://juejin.cn/post/6844903920431529997)
