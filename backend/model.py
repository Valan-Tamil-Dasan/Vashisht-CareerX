import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import GaussianNB  
import joblib  

df = pd.read_csv("doctor_dataset.csv")

df.rename(columns={"Biology Score": "Domain Score"}, inplace=True)

X = df.drop("Capability of Becoming a Doctor", axis=1)
y = df["Capability of Becoming a Doctor"]

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

model = GaussianNB()

model.fit(X_train, y_train)

accuracy = model.score(X_test, y_test)
print("Model Accuracy:", accuracy)

joblib.dump(model, "doctor_model.pkl")


