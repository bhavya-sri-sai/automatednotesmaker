import spacy # type: ignore


try:
    nlp = spacy.load("en_core_web_sm")
except IOError:
    print("Model not found. Downloading 'en_core_web_sm' model...")
    from spacy.cli import download
    download("en_core_web_sm")
    nlp = spacy.load("en_core_web_sm")
    print("Model downloaded and loaded successfully!")
"""

import spacy

# Load the pre-trained language model
nlp = spacy.load("en_core_web_sm")

# Sample text
text = "Apple is looking at buying U.K. startup for $1 billion"

# Process the text with spaCy
doc = nlp(text)

# Extract entities
for entity in doc.ents:
    print(f"{entity.text} ({entity.label_})")

"""

def analyze_text(text):
    doc = nlp(text)
    entities = [(ent.text, ent.label_) for ent in doc.ents]
    print(entities)
    return '\n'.join([','.join(x) for x in entities])
    # print(entities)
def visualize_ner(text):
    doc = nlp(text)
    return spacy.displacy.render(doc, style="ent")