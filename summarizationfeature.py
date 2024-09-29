import spacy
from nltk.tokenize import sent_tokenize
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np

# Load the SpaCy model for NLP

nlp = spacy.load('en_core_web_sm')

def extractive_summary(text, num_sentences=3):
    # Tokenize the text into sentences
    sentences = sent_tokenize(text)
    
    # Apply NLP pipeline to each sentence
    doc = [nlp(sentence) for sentence in sentences]
    
    # Vectorize sentences using TF-IDF
    tfidf_vectorizer = TfidfVectorizer()
    tfidf_matrix = tfidf_vectorizer.fit_transform([sentence.text for sentence in doc])
    
    # Compute cosine similarity matrix
    cosine_matrix = cosine_similarity(tfidf_matrix, tfidf_matrix)
    
    # Rank sentences based on similarity scores
    scores = cosine_matrix.sum(axis=1)
    ranked_sentences = [sentences[i] for i in scores.argsort()[-num_sentences:][::-1]]
    
    # Combine ranked sentences to form the summary
    summary = ' '.join(ranked_sentences)
    return summary

# Example usage
# if __name__ == "__main__":
#     text = input("enter the text:")
#     summarized_text = extractive_summary(text)
#     print("Original Text:\n", text)
#     print("\nSummarized Text:\n", summarized_text)

