INSERT INTO cocktails (name, fixings, recipe, type)
    VALUES
    (
        'Negroni', 
        '1 oz London dry gin, 1 oz sweet vermouth, 1 oz Campari', 
        'Stir with ice for 20-30 seconds. Strain into coupe glass. Garnish with orange peel.', 
        'classic'
    ),
    (
        'Gin & Tonic',	
        'Gin (amount to preference), Tonic water (amount to preference)', 
        'Pour over ice, garnish with lime wedge', 
        'classic'
    ),
    (  
        'Martini', 
        '2 oz gin, 1 oz dry vermouth',	
        'Add contents to ice-filled mixing glass or metal shaker. Stir, don’t shake, for about 10 seconds. Strain into a coupe or cocktail glass and garnish with a lemon peel.', 
        'classic'
    ),
    (
        'Manhattan', 
        '2 oz rye whiskey, 1 oz sweet vermouth, 2 dashes Angostura bitters', 
        'Stir the ingredients with cracked ice, then strain into in a chilled coupe. Garnish with an orange twist or brandied cherry.',	
        'classic'
    ),
    (
        'Daiquiri', 
        '2 oz white rum, 1 oz fresh-squeezed lime juice, ¾ oz simple syrup',	
        'Combine ingredient in a mixing glass with ice and shake well. Strain into a coupe.', 
        'classic'
    ),
    (
        'Darkn Stormy', 
        '1 part rum, 2 parts ginger beer',	
        'Fill glass with ice, add, rum, then top with ginger beer. Squeeze in, then garnish with a lime wedge.', 
        'classic'
    ),
    (
        'Long Island Iced Tea', 
        '1 part vodka, 1 part tequila, 1 part rum, 1 part gin, 1 part triple sec, 1 1/2 parts sweet and sour mix, 1 splash Coca-Cola®', 
        'Mix ingredients together over ice in a glass. Pour into a shaker and give one brisk shake. Pour back into the glass and make sure there is a touch of fizz at the top. Garnish with lemon.', 
        'classic'
    );
    -- ($/strDrink/, $/fixings/, )

INSERT INTO ingredients (name)
  VALUES
  ('gin'),
  ('campari'),
  ('tonic'),
  ('vermouth'),
  ('rye whiskey'),
  ('white rum'),
  ('lime'),
  ('rum'),
  ('ginger beer'),
  ('rum'),
  ('vodka'),
  ('tequila'),
  ('triple sec');

-- INSERT INTO cocktails_ingredients (cocktails_id, ingredients_id)
--   VALUES
--   ((SELECT id FROM cocktails WHERE id = 'Negroni'), (SELECT id FROM ingredient WHERE name = 'gin')),