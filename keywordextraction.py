from keybert import KeyBERT
from sentence_transformers import SentenceTransformer

# Load sentence transformer model
sentence_model = SentenceTransformer("paraphrase-MiniLM-L6-v2")

# Initialize KeyBERT model
kw_model = KeyBERT(model=sentence_model)

# Function to filter out non-English words and numbers
def filter_keywords(keywords):
    return [keyword[0] for keyword in keywords if all(word.isalpha() for word in keyword[0].split())]

# Function to extract and filter keywords (1-3 grams)
def extract_keywords(text):
    keywords_3gram = kw_model.extract_keywords(text, keyphrase_ngram_range=(2, 2), stop_words='english', use_mmr=True, diversity=0.7)
    filtered_keywords_3gram = filter_keywords(keywords_3gram)
    return filtered_keywords_3gram

    '''print("Top Keywords:")
    rkeys=[]
    for keyword, score in filtered_keywords_3gram[:5]:
        rkeys.append(keyword)
    
    # print('\n'.join(rkeys))
    return '\n'.join(rkeys)'''

# keywordExtraction('the still smell of old buildings it takes heat to bring out the order a cold storage find with him tacos Alpha store are my favourite is just for food is the hard cross bun')