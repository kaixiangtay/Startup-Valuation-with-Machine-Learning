import os
import io
import boto3
import json
import csv

ENDPOINT_NAME = os.environ['ENDPOINT_NAME']
runtime = boto3.client('runtime.sagemaker')


def lambda_handler(event, context):
    print("Received event: " + json.dumps(event, indent=2))

    data = json.loads(json.dumps(event))

    payload = data['startup']

    response = runtime.invoke_endpoint(EndpointName=ENDPOINT_NAME,
                                       ContentType='text/csv',
                                       Body=payload)

    result = json.loads(response['Body'].read().decode())

    startup_valuation_prediction = 10 ** result
    startup_valuation_prediction_label = f"Startup Predicted Valuation Amount: ${startup_valuation_prediction}"

    print("Startup Predicted Valuation Amount: ", startup_valuation_prediction)
    
    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        'body': startup_valuation_prediction_label
    }
