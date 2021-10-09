*Note: The following instructions were used with digital ocean's managed
kubernetes*

## Pre-requisite

- Install `kubectl`
- Install `doctl` which is the cli tool for digitalocean and authenticate

## Deploying to kubernetes

1. Create a kubernetes cluster
2. Choose 3 nodes as using less than that amount results in the `db` being stuck
   in `PENDING` status
3. Copy the command after creating kubernetes for adding the cluster to your
   context and run it your machine
4. Encode your mongodb `username` and `password` by running

```bash
echo -n 'your_database_username' | base64
echo -n 'your_database_password' | base64
```

5. Create a `secret.yaml` with following content

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: mongo-secret
data:
  user: your_encoded_username
  password: your_encoded_password
```

6. Create the kubenetes objects

```bash
kubectl create -f
web-deployment.yaml,web-service.yaml,secret.yaml,env-configmap.yaml,db-deployment.yaml,db-data-persistentvolumeclaim.yaml 
```

*Note: If you edited any of your yaml files and need to update those objects you
can run*

```bash
kubectl apply -f your-yaml
```

7. Check if your pods are running

```bash
kubectl get pods
```

> You can debug by running `kubectl describe pods <pod_name>` or `kubectl logs
<pod-name>`

> You can also check you things like your `persistentVolumeClaim` by running
`kubectl describe pvc`

8. Check the external ip of your load balancer by running

```bash
kubectl get svc

NAME         TYPE           CLUSTER-IP       EXTERNAL-IP      PORT(S)        AGE
db           ClusterIP      10.245.189.250   <none>           27017/TCP      93s
kubernetes   ClusterIP      10.245.0.1       <none>           443/TCP        25m12s
web          LoadBalancer   10.245.15.56     your_lb_ip       80:30729/TCP   93s
```

9. Navigate to `http://your_lb_ip` in your browser

10. When you delete your kubernetes cluster, you can also delete the context on
   your machine by running 

```bash
# Get list of contexts
kubectl config get-contexts
CURRENT   NAME                                         CLUSTER                                      AUTHINFO                                           NAMESPACE
*         do-sgp1-k8s-1-21-3-do-0-sgp1-1633644835453   do-sgp1-k8s-1-21-3-do-0-sgp1-1633644835453   do-sgp1-k8s-1-21-3-do-0-sgp1-1633644835453-admin
          docker-desktop                               docker-desktop                               docker-desktop
          
# Delete context
kubectl config delete-context my-cluster-context
```
