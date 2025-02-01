from transformers import pipeline

# Load BERT-based Question Answering model
qa_pipeline = pipeline("question-answering", model="deepset/bert-base-cased-squad2")

def process_query(query):
    """Use BERT to analyze the query."""
    context = """
    Alice is the manager of Sales. Bob is the manager of Engineering. Charlie is the manager of Marketing.
    The total salary expense for Sales is 50000, for Engineering is 70000, and for Marketing is 60000.
    Employees hired after 2021-01-01 include Alice and Charlie.
    """

    answer = qa_pipeline(question=query, context=context)
    print(f"Answer from BERT: {answer}")
    return answer['answer']
