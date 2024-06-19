# Import necessary libraries
import num py as np 
from sklearn.cluster import KMeans
import matplotlib.pyplot as plt

# Create random data for demonstration
np.random.seed(0)
X = np.random.rand(100, 2)

# Specify the number of clusters (K)
k = 3

# Create a KMeans instance
kmeans = KMeans(n_clusters=k)

# Fit the data to the KMeans model
kmeans.fit(X)

# Get the cluster labels for each data point
labels = kmeans.labels_

# Get the cluster centers
centers = kmeans.cluster_centers_

# Visualize the clusters
plt.scatter(X[:, 0], X[:, 1], c=labels, cmap='viridis')
plt.scatter(centers[:, 0], centers[:, 1], c='red', marker='x', s=200)
plt.xlabel("Feature 1")
plt.ylabel("Feature 2")
plt.title(f'K-Means Clustering with {k} Clusters')
plt.show()
