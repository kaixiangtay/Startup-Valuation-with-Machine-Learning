import pandas as pd

# initial data sourced through kaggle https://www.kaggle.com/datasets/justinas/startup-investments from Crunchbase 2013 Snapshot © 2013

fr_df = pd.read_csv("archive/funding_rounds.csv")
fun_df = pd.read_csv("archive/funds.csv")
inv_df = pd.read_csv("archive/investments.csv")
obj_df = pd.read_csv("archive/objects.csv", parse_dates=['created_at'])
rel_df = pd.read_csv("archive/relationships.csv")

# objects
parsed_obj_df = obj_df[['id', 'created_at', 'funding_rounds', 'funding_total_usd']]

# relationships
filtered_rel_df = rel_df[['relationship_object_id', 'title']]
member_counts = filtered_rel_df.groupby('relationship_object_id')['title'].count()
founder_counts = filtered_rel_df[filtered_rel_df['title'].str.lower().str.contains("founder") == True].groupby('relationship_object_id')['title'].count()
parsed_rel_df = pd.merge(member_counts, founder_counts, how='outer', on='relationship_object_id').fillna(0)
parsed_rel_df.columns = ['number_of_members', 'number_of_founders']

parsed_rel_df = pd.merge(parsed_obj_df, parsed_rel_df, how='left', left_on='id', right_on='relationship_object_id').fillna(0)
# print(parsed_rel_df.head())
parsed_rel_df.info()

# funding rounds
filtered_fr_df = fr_df.loc[fr_df['raised_currency_code'] == 'USD', ['object_id', 'raised_amount_usd', 'funding_round_type', 'funding_round_code', 'pre_money_valuation', 'post_money_valuation']].fillna(0)
# mean/max funding round
filtered_fr_df['mean_funding'] = filtered_fr_df.groupby('object_id')['raised_amount_usd'].transform('mean')
filtered_fr_df['max_funding'] = filtered_fr_df.groupby('object_id')['raised_amount_usd'].transform('max')
types = filtered_fr_df.pivot_table(values='raised_amount_usd', index='object_id', columns='funding_round_type').drop(columns=['angel', 'other', 'series-a', 'series-b', 'series-c+'])
codes = filtered_fr_df.pivot_table(values='raised_amount_usd', index='object_id', columns='funding_round_code')
pivoted_fr_df = pd.merge(types, codes, how='outer', on='object_id').fillna(0)
parsed_fr_df = pd.merge(filtered_fr_df[['object_id', 'pre_money_valuation', 'post_money_valuation', 'mean_funding', 'max_funding']], pivoted_fr_df, how='outer', on='object_id').fillna(0)
# print(parsed_fr_df.head())
parsed_fr_df.info()

# investments
filtered_inv_df = inv_df[['funded_object_id', 'investor_object_id']]
filtered_fun_df = fun_df.loc[fun_df['raised_currency_code'] == 'USD', ['object_id', 'raised_amount']]
parsed_inv_df = pd.merge(filtered_inv_df, filtered_fun_df, how='inner', left_on='investor_object_id', right_on='object_id')
parsed_inv_df = parsed_inv_df.groupby('funded_object_id').aggregate({'investor_object_id':'count', 'raised_amount':'sum'})
parsed_inv_df.columns = ['number of invested VCs', 'total investment from VCs']
# print(parsed_inv_df.head())
parsed_inv_df.info()

final_df = pd.merge(parsed_rel_df, parsed_fr_df, how='inner', left_on='id', right_on='object_id').drop(columns=['object_id'])
final_df = pd.merge(final_df, parsed_inv_df, how='left', left_on='id', right_on='funded_object_id').drop_duplicates().fillna(0)
final_df.info()
final_df.to_csv('data/cleaned_startups.csv')